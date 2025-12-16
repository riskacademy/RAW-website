import React from 'react';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TermsOfService() {
    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Terms of Service"
                    subtitle="Last Updated: December 2025"
                    className="mb-16"
                />

                <div className="max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300">
                    <p className="lead text-xl text-gray-200 mb-8">
                        These Terms of Service (the “Terms”) govern your access to and use of the website www.riskawarenessweek.com (the "Site") and the online event platform, content, and services offered thereon (collectively, the ”Services”).
                    </p>

                    <p className="mb-8">
                        The Services are owned and operated by RISK ACADEMY LTD. (“Company”, “we”, “us”, or “our”), a company registered in Malta.
                    </p>

                    <p className="mb-12">
                        Please read these Terms carefully. By accessing the Site, registering for an account, purchasing a ticket, or participating in Risk Awareness Week, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Acceptance of Terms</h2>
                    <p className="mb-8">
                        By using our Services, you represent that you are at least 18 years of age or have reached the age of majority in your jurisdiction. These Terms form a legally binding contract between you and RISK ACADEMY LTD.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Description of Services</h2>
                    <p className="mb-8">
                        Risk Awareness Week is an online event platform providing educational workshops, sessions, and materials related to risk management and decision-making. We provide the platform, host the content, and manage registrations directly.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. User Accounts</h2>
                    <p className="mb-4">
                        To access certain features of the Services (such as watching sessions or interacting with speakers), you may be required to register for an account.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
                        <li><strong>Security:</strong> You are responsible for safeguarding your password. You agree not to disclose your password to any third party.</li>
                        <li><strong>Responsibility:</strong> You are solely responsible for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
                        <li><strong>No Account Sharing:</strong> Your account and ticket are personal to you. You may not share your login credentials with others to allow them to access paid content without purchasing their own ticket.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Fees and Payments</h2>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li><strong>Pricing:</strong> Prices for tickets, replay passes, or other products are listed on the Site and are subject to change.</li>
                        <li><strong>Payment Processing:</strong> We use secure third-party payment processors (e.g., Stripe) to handle transactions. We do not store your full credit card details on our servers.</li>
                        <li><strong>Refunds:</strong> Unless otherwise stated on the specific event registration page, all sales are final. Refunds may be granted at our sole discretion or in the event of significant technical failure preventing access to the content.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Intellectual Property Rights</h2>
                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">5.1 Our Content</h3>
                    <p className="mb-4">
                        All content available on the Site, including but not limited to designs, text, graphics, pictures, video, information, software, sound files, and other files (collectively, "Site Content"), is the proprietary property of RISK ACADEMY LTD. or its licensors (including speakers and partners).
                    </p>
                    <p className="mb-4">
                        You are granted a limited, non-sublicensable license to access and use the Services for your personal, non-commercial, and educational use.
                    </p>
                    <p className="mb-6">
                        <strong>Strictly Prohibited:</strong> You may not record, download, reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any Site Content (especially video sessions) without our express written permission.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">5.2 Your Content</h3>
                    <p className="mb-8">
                        You may be able to post messages, questions, or chat logs ("User Content") during the event. You retain ownership of your User Content. However, by posting it, you grant us a worldwide, royalty-free, perpetual license to use, display, and distribute your User Content in connection with the operation and promotion of the Services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. User Conduct</h2>
                    <p className="mb-4">You agree not to do any of the following while using the Services:</p>
                    <ul className="list-disc pl-6 space-y-3 mb-8">
                        <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law.</li>
                        <li>Harass, threaten, demean, or intimidate other attendees, speakers, or staff.</li>
                        <li>Post or transmit any content that is infringing, libelous, defamatory, obscene, pornographic, abusive, or otherwise objectionable.</li>
                        <li>Use any robot, spider, scraper, or other automated means to access the Services for any purpose (including data mining) without our express written permission.</li>
                        <li>Interfere with or damage the operation of the Services, including through the use of viruses, cancel bots, Trojan horses, harmful code, packet floods, denial-of-service attacks, or similar methods.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Third-Party Links and Tools</h2>
                    <p className="mb-8">
                        The Site may contain links to third-party websites or services (e.g., sponsors' sites, external tools) that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that RISK ACADEMY LTD. shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your use of any such content or services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Disclaimer of Warranties</h2>
                    <p className="mb-4">
                        <strong>Educational Purposes Only:</strong> The content provided during Risk Awareness Week is for educational and informational purposes only. It does not constitute professional financial, legal, or risk management advice. You should consult with a qualified professional before making specific business decisions based on the content of the event.
                    </p>
                    <p className="mb-8 uppercase font-medium text-gray-400">
                        THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Limitation of Liability</h2>
                    <p className="mb-4 uppercase font-medium text-gray-400">
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RISK ACADEMY LTD., ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES.
                    </p>
                    <p className="mb-8 uppercase font-medium text-gray-400">
                        OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF THE SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US FOR THE EVENT IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR ONE HUNDRED EUROS (€100) IF NO PURCHASE WAS MADE.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Termination</h2>
                    <p className="mb-8">
                        We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">11. Governing Law</h2>
                    <p className="mb-8">
                        These Terms shall be governed by and construed in accordance with the laws of Malta, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located within Malta to resolve any dispute or claim arising from these Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">12. Changes to Terms</h2>
                    <p className="mb-8">
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on the Site. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">13. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                        <p className="mb-2"><strong className="text-white">RISK ACADEMY LTD.</strong></p>
                        <p className="mb-2"><strong className="text-white">Address:</strong> Phoenix Business Centre, The Penthouse, Old Railway Track, Santa Venera, SVR 9022, Malta</p>
                        <p className="mb-0"><strong className="text-white">Email:</strong> <a href="mailto:alex.ausrisk@gmail.com" className="text-purple-400 hover:text-purple-300">alex.ausrisk@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
}
