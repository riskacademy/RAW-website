import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function CookiePolicy() {
    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Cookie Policy"
                    subtitle="Last Updated: December 2025"
                    className="mb-16"
                />

                <div className="max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300">
                    <p className="lead text-xl text-gray-200 mb-8">
                        This Cookie Policy explains how RISK ACADEMY LTD. ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at www.riskawarenessweek.com (the "Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. What are Cookies?</h2>
                    <p className="mb-4">
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    <p className="mb-8">
                        Cookies set by the website owner (in this case, RISK ACADEMY LTD.) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Why Do We Use Cookies?</h2>
                    <p className="mb-4">We use first-party and third-party cookies for several reasons.</p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Essential Cookies:</strong> Some cookies are required for technical reasons in order for our Website to operate (e.g., to keep you logged in or to process payments).</li>
                        <li><strong>Analytics Cookies:</strong> Other cookies allow us to track and target the interests of our users to enhance the experience on our Website.</li>
                        <li><strong>Functionality Cookies:</strong> To remember your preferences, such as your time zone or language settings.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Categories of Cookies We Use</h2>
                    <p className="mb-4">The specific types of cookies served through our Website and the purposes they perform are described below:</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">A. Strictly Necessary Cookies</h3>
                    <p className="mb-4">
                        These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas (logged-in state) and payment processing.
                    </p>
                    <p className="mb-4">
                        <strong>Examples:</strong> User authentication tokens, shopping cart session, security cookies from Stripe (for fraud detection).
                    </p>
                    <p className="mb-8 text-gray-400 italic">
                        Note: Because these cookies are strictly necessary to deliver the Website to you, you cannot refuse them.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">B. Performance and Analytics Cookies</h3>
                    <p className="mb-4">
                        These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                    </p>
                    <p className="mb-4"><strong>Provider:</strong> Google Analytics.</p>
                    <p className="mb-8"><strong>Purpose:</strong> To analyze visitor numbers, pages viewed, and navigation paths so we can improve the event structure.</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">C. Functionality Cookies</h3>
                    <p className="mb-4">
                        These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.
                    </p>
                    <p className="mb-8">
                        <strong>Examples:</strong> Remembering your time zone settings (crucial for scheduling workshops) or volume settings on video players.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">D. Targeting and Advertising Cookies</h3>
                    <p className="mb-4">
                        These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                    </p>
                    <p className="mb-8">
                        <strong>Examples:</strong> Pixels from Facebook (Meta), LinkedIn, or Google Ads that help us measure the effectiveness of our ad campaigns for the event.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Third-Party Cookies</h2>
                    <p className="mb-4">
                        In addition to our own cookies, we may also use various third-parties to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. Common third-party providers on our Website may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li>Google Analytics (Traffic analysis)</li>
                        <li>Stripe (Payment processing)</li>
                        <li>Vimeo / YouTube (Video hosting for sessions)</li>
                        <li>Social Media Widgets (Buttons allowing you to share content on Facebook, LinkedIn, Twitter).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. How Can You Control Cookies?</h2>
                    <p className="mb-4">You have the right to decide whether to accept or reject cookies.</p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Cookie Consent Banner:</strong> Upon your first visit to our Website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time.</li>
                        <li><strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Updates to This Policy</h2>
                    <p className="mb-8">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about our use of cookies or other technologies, please contact us at:
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                        <p className="mb-2"><strong className="text-white">RISK ACADEMY LTD.</strong></p>
                        <p className="mb-0"><strong className="text-white">Address:</strong> Phoenix Business Centre, The Penthouse, Old Railway Track, Santa Venera, SVR 9022, Malta</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
