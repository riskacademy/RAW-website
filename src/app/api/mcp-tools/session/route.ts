// MCP tool: get_session
//
// Per-session schedule for RAW2026 is not yet published at the time of writing
// (the conference runs 12-16 October 2026; titles/times land closer to the
// event). Until then, this tool dispatches at the *topic-track* level:
//
//   ?topic=quantification   -> details of the Quantification track
//   ?date=2026-10-13        -> which phases run that day + topic tracks active
//   ?id=<session-id>        -> 404 with a scheduledPublished=false hint
//   (no args)               -> full topic catalogue (7 tracks)
//
// When SESSIONS data lands in src/data/topics.ts (or a dedicated sessions.ts),
// extend this handler — agents will already be calling it with the right
// parameter shape.

import { NextResponse } from 'next/server';

import { EVENT_OVERVIEW } from '@/data/event-overview';
import { TOPICS, findTopicByQuery, type Topic } from '@/data/topics';

export const dynamic = 'force-dynamic';

interface SessionDispatchResult {
    mode: 'topic' | 'date' | 'id' | 'catalogue';
    schedulePublished: boolean;
    note: string;
    topics?: Topic[];
    phases?: { date: string; phases: typeof EVENT_OVERVIEW.phases }[];
    matched?: Topic | null;
    scheduleUrl: string;
}

const SCHEDULE_NOT_PUBLISHED_NOTE =
    'Per-session schedule (titles, times, individual facilitators) for RAW2026 is not yet published. Returning topic-track level information. Full schedule lands on https://2026.riskawarenessweek.com/schedule/ closer to the event.';

function phasesForDate(dateISO: string): typeof EVENT_OVERVIEW.phases {
    // Phase 1: 2026-10-12 .. 2026-10-13
    // Phase 2: 2026-10-14 .. 2026-10-16
    if (dateISO === '2026-10-12' || dateISO === '2026-10-13') {
        return EVENT_OVERVIEW.phases.filter((p) => p.id === 'phase1');
    }
    if (dateISO === '2026-10-14' || dateISO === '2026-10-15' || dateISO === '2026-10-16') {
        return EVENT_OVERVIEW.phases.filter((p) => p.id === 'phase2');
    }
    return [];
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const topicParam = url.searchParams.get('topic')?.trim() || '';
    const dateParam = url.searchParams.get('date')?.trim() || '';
    const idParam = url.searchParams.get('id')?.trim() || '';

    let result: SessionDispatchResult;

    if (idParam) {
        result = {
            mode: 'id',
            schedulePublished: false,
            note: SCHEDULE_NOT_PUBLISHED_NOTE + ' No session is currently addressable by id.',
            matched: null,
            scheduleUrl: EVENT_OVERVIEW.urls.schedule,
        };
    } else if (dateParam) {
        const phases = phasesForDate(dateParam);
        const topicsForPhase = phases.length > 0
            ? TOPICS.filter((t) => t.phase === phases[0].id || t.phase === 'both')
            : [];
        result = {
            mode: 'date',
            schedulePublished: false,
            note:
                phases.length === 0
                    ? `Date ${dateParam} is outside the RAW2026 window (12-16 October 2026).`
                    : SCHEDULE_NOT_PUBLISHED_NOTE,
            phases: phases.length > 0 ? [{ date: dateParam, phases }] : [],
            topics: topicsForPhase,
            scheduleUrl: EVENT_OVERVIEW.urls.schedule,
        };
    } else if (topicParam) {
        const matched = findTopicByQuery(topicParam);
        result = {
            mode: 'topic',
            schedulePublished: false,
            note: matched
                ? SCHEDULE_NOT_PUBLISHED_NOTE + ` Topic "${matched.name}" track is confirmed; per-session details not yet announced.`
                : `No topic track matches "${topicParam}". Available tracks: ${TOPICS.map((t) => t.name).join(', ')}.`,
            matched,
            topics: matched ? [matched] : [],
            scheduleUrl: EVENT_OVERVIEW.urls.schedule,
        };
    } else {
        result = {
            mode: 'catalogue',
            schedulePublished: false,
            note: SCHEDULE_NOT_PUBLISHED_NOTE,
            topics: TOPICS,
            scheduleUrl: EVENT_OVERVIEW.urls.schedule,
        };
    }

    return NextResponse.json(result, {
        headers: {
            'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
