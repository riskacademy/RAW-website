'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
    tag?: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: 'How often should we conduct risk assessments?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">The question assumes risk assessment is a periodic event separate from business operations. The RM2 answer: <span className="text-white font-semibold">Risk analysis should happen before every significant decision</span>, not on a calendar schedule.</p>
                    <p>Instead of annual risk workshops, integrate uncertainty analysis into your existing processes: budget planning (Monte Carlo simulation of cost ranges), capital allocation (decision trees comparing investment options), vendor selection (quantified risk scoring), and project approvals (probabilistic schedule analysis). If you're making a $5M decision without analyzing the range of possible outcomes, the timing of your last "risk assessment" is irrelevant.</p>
                </>
            )
        },
        {
            question: 'How do we identify emerging risks?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">This question treats "emerging risks" as things to document in registers. The RM2 reframe: <span className="text-white font-semibold">What new uncertainties could materially change the outcomes of our pending decisions?</span></p>
                    <p>If you're deciding whether to build a new facility, emerging risks aren't abstract threats to catalog—they're specific uncertainties affecting your decision: Will new regulations increase construction costs by 15-30%? Could supply chain disruptions delay commissioning by 6-12 months? Might technological shifts make the facility obsolete within 10 years? Model these uncertainties in your decision analysis, don't just list them in a register.</p>
                </>
            )
        },
        {
            question: 'What\'s the difference between inherent and residual risk?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">This distinction is useful for documentation but disconnected from decisions. The RM2 question is: <span className="text-white font-semibold">How do different mitigation options change the probability distribution of outcomes for this specific decision?</span></p>
                    <p>Example: You're deciding whether to launch a product. Without additional quality controls, there's a 15% chance of recalls costing $2-8M. With enhanced testing ($500K investment), that drops to 3% probability with $1-3M cost range. The decision isn't about calculating "residual risk scores"—it's comparing expected value and risk exposure across options using decision trees or Monte Carlo simulation.</p>
                </>
            )
        },
        {
            question: 'How should we prioritize our top risks?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Risk registers create the illusion that you're "managing risks" by ranking them. The RM2 approach: <span className="text-white font-semibold">Prioritize decisions by their importance and uncertainty, not risks by subjective scores.</span></p>
                    <p>Don't ask "Which risk is #1 on our register?" Ask "Which pending decisions have the highest stakes and greatest uncertainty?" A $50M acquisition with 40% probability ranges deserves sophisticated analysis. A $200K routine purchase might need only basic scenario planning. Focus analytical resources where decision quality matters most, not where heat maps show red boxes.</p>
                </>
            )
        },
        {
            question: 'How do we define our risk appetite?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Risk appetite statements are often vague governance documents ("We have moderate risk appetite for growth initiatives"). The RM2 translation: <span className="text-white font-semibold">What probability of adverse outcomes are we willing to accept for different decision types, and at what magnitude?</span></p>
                    <p>Example: "For capital projects, we accept 10% probability of exceeding budget by more than 20%, but only 2% probability of exceeding by more than 40%." Or: "We'll pursue market expansion if there's at least 70% probability of positive NPV within 3 years." These quantified thresholds actually guide decisions, unlike qualitative appetite statements that satisfy auditors but inform nothing.</p>
                </>
            )
        },
        {
            question: 'What should our risk register include?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Risk registers satisfy compliance requirements but rarely improve decisions. If you must maintain one for governance, keep it minimal. The RM2 question: <span className="text-white font-semibold">What decision-support analyses do we need for upcoming strategic choices?</span></p>
                    <p>Instead of populating risk registers, build decision models for actual choices: Should we invest in automation? (Model cost uncertainty, productivity gains, implementation timeline risks.) Which supplier should we select? (Quantify delivery reliability, quality variance, financial stability.) How much contingency do we need in next year's budget? (Run Monte Carlo simulation on cost drivers.) These analyses drive value; risk registers consume resources.</p>
                </>
            )
        },
        {
            question: 'How do we ensure accountability for risk management?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">This typically means assigning "risk owners" to monitor risks in registers. The RM2 approach: <span className="text-white font-semibold">Decision-makers are accountable for considering uncertainty in their choices.</span></p>
                    <p>Accountability comes from process integration: Budget owners must justify contingency levels with probability analysis. Project managers must present schedule ranges, not single-point estimates. Procurement teams must quantify vendor risks, not rate them red/yellow/green. When risk analysis is embedded in decision processes, accountability is automatic—poor decisions become visible through outcomes, not through unfilled risk register fields.</p>
                </>
            )
        },
        {
            question: 'Should we use a 3×3 or 5×5 risk matrix?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Neither. Risk matrices introduce systematic mathematical errors and cognitive biases that make resource allocation worse. The RM2 answer: <span className="text-white font-semibold">Use quantitative methods proportional to the decision's importance.</span></p>
                    <p>For routine decisions: Simple scenario analysis (best/worst/likely cases). For medium-stakes decisions: Decision trees with probability-weighted outcomes. For complex, high-value decisions: Monte Carlo simulation modeling uncertainty distributions. The choice depends on decision complexity and stakes, not on which matrix size your framework mandates.</p>
                </>
            )
        },
        {
            question: 'How do we connect risk management to strategy?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">This question reveals the fundamental RM1 problem—risk management is separate from strategy and needs to be "connected." In RM2: <span className="text-white font-semibold">Risk analysis IS strategic decision-making.</span></p>
                    <p>Strategic planning without uncertainty analysis is just wishful thinking. When evaluating market entry, don't create a separate "strategic risks" register—model the decision: What's the probability distribution of market size? Customer acquisition costs? Competitive response? Regulatory changes? Build decision trees comparing entry strategies under different scenarios. The risk analysis and strategic analysis are the same activity, not two things requiring "connection."</p>
                </>
            )
        },
        {
            question: 'What Key Risk Indicators should we track?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">KRIs are backward-looking metrics that report on risks after they've materialized. The RM2 approach: <span className="text-white font-semibold">Track leading indicators that trigger decision reviews when uncertainty parameters change.</span></p>
                    <p>Example: Instead of tracking "number of safety incidents" (lagging KRI), monitor conditions that warrant decision reassessment: "If commodity prices exceed $X, rerun capital project NPV analysis." "If customer churn increases above Y%, reassess product strategy using updated probability distributions." These triggers prompt decision reviews, not just reporting.</p>
                </>
            )
        },
        {
            question: 'How do we get executive buy-in for risk management?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Executives resist risk management when it's compliance theater that consumes resources without improving decisions. The RM2 answer: <span className="text-white font-semibold">Show executives how quantitative risk analysis improves their specific pending decisions.</span></p>
                    <p>Don't present risk registers or heat maps in board meetings. Instead: "Here's our capital allocation decision modeled three ways, showing probability of achieving target returns under different uncertainty scenarios." Or: "We can reduce insurance premiums by $2M annually by demonstrating quantified risk controls to underwriters." Executives buy in when risk analysis demonstrates clear ROI.</p>
                </>
            )
        },
        {
            question: 'How do we report risk management effectiveness to the board?',
            tag: 'RM1 Question',
            answer: (
                <>
                    <p className="mb-4">Board risk reports typically show risk register updates that tell executives little about decision quality. The RM2 approach: <span className="text-white font-semibold">Report on how risk analysis improved specific strategic decisions and their outcomes.</span></p>
                    <p>Show the board: "We used Monte Carlo simulation to optimize capital allocation across five projects, improving expected return by $12M while reducing probability of loss from 18% to 7%." Or: "Quantitative vendor risk analysis prevented selection of lowest bidder who subsequently failed." Report decision quality improvements and measurable outcomes, not risk register statistics.</p>
                </>
            )
        }
    ];

    return (
        <section id="faq">
            <div className="container">
                <SectionHeader title="Frequently Asked Questions" subtitle="Common risk management questions reframed for decision-centric thinking" />

                <div className="mx-auto !space-y-6" style={{ marginTop: '60px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full !px-8 !py-6 text-left flex items-start justify-between hover:bg-white/5 transition-colors group"
                            >
                                <div className="pr-8">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className="text-purple-400 font-mono text-sm">{(index + 1).toString().padStart(2, '0')}.</span>
                                        {faq.tag && (
                                            <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs font-bold uppercase rounded border border-red-500/20">
                                                {faq.tag}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                                        {faq.question}
                                    </h3>
                                </div>
                                <span className="text-purple-400 text-xl font-bold flex-shrink-0 transition-transform duration-200 mt-2 group-hover:scale-110">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="!px-8 !pb-8 pt-2">
                                    <div className="text-gray-400 text-base leading-relaxed pl-0 md:pl-8 border-l-0 md:border-l-2 md:border-purple-500/20">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
