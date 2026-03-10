import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/schema-helpers';
import { Shield } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: 'Privacy Policy',
    description: 'Privacy Policy for Maatritva IVF — how we collect, use, and protect your personal and medical data.',
    path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
    return (
        <section className="py-16 lg:py-24 bg-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-8 h-8 text-navy" />
                    <h1 className="font-heading text-3xl lg:text-4xl font-bold text-navy">Privacy Policy</h1>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm prose prose-gray max-w-none">
                    <p className="italic text-gray-500 text-sm">Last updated: February 2026</p>

                    <h2>1. Who We Are</h2>
                    <p>
                        This privacy policy applies to <strong>Maatritva IVF</strong> (bestivfcentreinkolkata.com),
                        operated by Dr. Ankita Mandal. We are committed to protecting the privacy and security
                        of your personal and medical information in compliance with Indian data protection laws
                        and National Medical Commission (NMC) guidelines.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, phone number, email address, and date when you fill out our consultation booking form.</li>
                        <li><strong>Medical Information:</strong> Any health-related information you voluntarily share during consultations or through our Fertility Score Calculator.</li>
                        <li><strong>Technical Data:</strong> Browser type, IP address, and browsing behaviour on our website (collected via cookies and analytics tools).</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <ul>
                        <li>To schedule and confirm appointments</li>
                        <li>To provide you with relevant medical information and follow-up care</li>
                        <li>To improve our website experience and services</li>
                        <li>To send appointment reminders (with your consent)</li>
                    </ul>
                    <p>
                        We <strong>never</strong> sell, rent, or share your personal or medical information
                        with third parties for marketing purposes.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement industry-standard security measures including encrypted data transmission
                        (SSL/TLS), secure servers, and restricted access to personal data. Medical records are
                        handled in compliance with Indian medical record-keeping regulations.
                    </p>

                    <h2>5. Your Rights</h2>
                    <ul>
                        <li>Access your personal data held by us</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data (subject to medical record-keeping requirements)</li>
                        <li>Withdraw consent for non-essential communications</li>
                    </ul>

                    <h2>6. Cookies</h2>
                    <p>
                        Our website uses essential cookies for functionality and analytics cookies to understand
                        visitor behaviour. You can disable cookies in your browser settings, though this may
                        affect your website experience.
                    </p>

                    <h2>7. Third-Party Services</h2>
                    <p>
                        We may use third-party services (e.g., Google Analytics) for website improvement.
                        These services have their own privacy policies. We ensure all third-party partners
                        comply with applicable data protection standards.
                    </p>

                    <h2>8. Changes to This Policy</h2>
                    <p>
                        We may update this policy from time to time. Material changes will be communicated
                        through our website. Your continued use of the site constitutes acceptance of the
                        updated policy.
                    </p>

                    <h2>9. Contact Us</h2>
                    <p>
                        For privacy-related queries, contact us at:<br />
                        <strong>Email:</strong> privacy@bestivfcentreinkolkata.com<br />
                        <strong>Address:</strong> Maatritva IVF, New Town, Rajarhat, Kolkata — 700156
                    </p>
                </div>
            </div>
        </section>
    );
}
