import Script from 'next/script';

/**
 * GA4 base loader. Renders nothing unless NEXT_PUBLIC_GA4_MEASUREMENT_ID is set,
 * so dev and unconfigured envs stay silent.
 */
export default function GA4() {
    const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
    if (!id) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${id}', { send_page_view: true });
                `}
            </Script>
        </>
    );
}
