import Script from 'next/script';

export default function RCAITraffic() {
    return (
        <Script
            src="https://metrics.riskawarenessweek.com/rc-ai-traffic.js"
            data-site="rc_086d9feb3971c2ff"
            strategy="afterInteractive"
        />
    );
}
