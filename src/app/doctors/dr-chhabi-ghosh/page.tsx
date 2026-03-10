import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Star, GraduationCap, Users, Heart, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/schema-helpers';

export const metadata: Metadata = generatePageMetadata({
    title: 'Dr. Chhabi Ghosh — Senior Fertility Consultant | Maatritva IVF Kolkata',
    description: 'Dr. Chhabi Ghosh is a senior fertility consultant at Maatritva IVF with 35+ years of experience, FRCOG (UK), and expertise in complex IVF cases and reproductive endocrinology.',
    path: '/doctors/dr-chhabi-ghosh',
    keywords: ['Dr Chhabi Ghosh', 'senior fertility consultant Kolkata', 'FRCOG fertility specialist Kolkata', 'IVF doctor Kolkata'],
});

const faqs = [
    {
        question: 'What are Dr. Chhabi Ghosh\'s qualifications?',
        answer:
            'Dr. Chhabi Ghosh holds an <b>MBBS, DGO, DNB (OBG), FRCOG (Fellow of the Royal College of Obstetricians and Gynaecologists, UK)</b>, and a Fellowship in Reproductive Endocrinology. Her qualifications place her among the most decorated fertility specialists in Eastern India.',
    },
    {
        question: 'How many years of experience does Dr. Chhabi Ghosh have?',
        answer:
            'Dr. Chhabi Ghosh has <b>over 35 years of clinical experience</b> in infertility treatment, reproductive endocrinology, and advanced gynaecological practice.',
    },
    {
        question: 'What does Dr. Chhabi Ghosh specialise in?',
        answer:
            'Her areas of expertise include <b>complex IVF case management, recurrent pregnancy loss, reproductive endocrinology, advanced laparoscopic surgery</b>, and menopausal medicine.',
    },
    {
        question: 'Can I specifically request Dr. Chhabi Ghosh for my consultation?',
        answer:
            'Yes. You can <b>request a specific doctor</b> when booking your appointment at Maatritva IVF. Our team will accommodate your preference.',
    },
];

function getPersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: 'Dr. Chhabi Ghosh',
        url: `${SITE_URL}/doctors/dr-chhabi-ghosh`,
        description: 'Dr. Chhabi Ghosh is a Senior Fertility Consultant at Maatritva IVF, Kolkata with over 35 years of distinguished experience. FRCOG (UK), Fellowship in Reproductive Endocrinology.',
        medicalSpecialty: 'Reproductive Endocrinology',
        jobTitle: 'Senior Fertility Consultant',
        worksFor: {
            '@type': 'MedicalClinic',
            name: 'Maatritva Fertility IVF & Healthcare',
            url: SITE_URL,
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'New Town, Rajarhat',
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                postalCode: '700156',
                addressCountry: 'IN',
            },
        },
        hasCredential: [
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBBS' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'DGO' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'DNB (Obstetrics & Gynaecology)' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'fellowship', name: 'FRCOG (Royal College, UK)' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'fellowship', name: 'Fellowship in Reproductive Endocrinology' },
        ],
        memberOf: [
            { '@type': 'Organization', name: 'Royal College of Obstetricians and Gynaecologists (RCOG), UK' },
        ],
        sameAs: [
            'https://www.google.com/maps/place/Maatritva+Fertility+IVF',
        ],
        knowsAbout: ['IVF', 'Reproductive Endocrinology', 'Recurrent Pregnancy Loss', 'Complex IVF', 'Laparoscopic Surgery', 'Menopausal Medicine'],
        availableService: [
            { '@type': 'MedicalProcedure', name: 'Complex IVF Management' },
            { '@type': 'MedicalProcedure', name: 'Reproductive Endocrinology' },
            { '@type': 'MedicalProcedure', name: 'Recurrent Pregnancy Loss Treatment' },
        ],
        areaServed: [
            { '@type': 'City', name: 'Kolkata' },
            { '@type': 'State', name: 'West Bengal' },
        ],
    };
}

export default function DrChhabiGhosh() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Doctors', url: '/doctors' },
        { name: 'Dr. Chhabi Ghosh', url: '/doctors/dr-chhabi-ghosh' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getPersonSchema()} />
            <SchemaMarkup schema={getFAQSchema(faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                                <Award className="w-4 h-4 text-gold" />
                                <span className="text-sm text-white/90 font-medium">Senior Fertility Consultant</span>
                            </div>
                            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">
                                Dr. Chhabi Ghosh
                            </h1>
                            <p className="text-rose-pale font-medium text-lg mb-4">
                                Senior Fertility Consultant · FRCOG (UK)
                            </p>
                            <p className="text-white/70 text-sm mb-6">
                                MBBS · DGO · DNB (OBG) · FRCOG (UK) · Fellowship in Reproductive Endocrinology
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">35+ Years Experience</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">FRCOG (UK)</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">Published Researcher</span>
                            </div>
                            <Link
                                href="#book"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                Book a Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <div className="w-72 h-72 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Stethoscope className="w-24 h-24 text-white/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-navy mb-6">About Dr. Chhabi Ghosh</h2>
                    <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
                        <p>
                            Dr. Chhabi Ghosh brings <strong>over 35 years of distinguished experience</strong> in infertility treatment
                            and reproductive medicine to Maatritva IVF. With national and international training, including an
                            <strong> FRCOG from the Royal College of Obstetricians and Gynaecologists (UK)</strong> and a Fellowship in
                            Reproductive Endocrinology, she is one of the most decorated fertility consultants in Eastern India.
                        </p>
                        <p>
                            Her vast experience spans <strong>complex IVF cases, recurrent pregnancy loss, and reproductive endocrinology</strong>.
                            Dr. Ghosh&apos;s calm, reassuring demeanour and evidence-based approach make her a pillar of the Maatritva clinical team.
                            She has been a former Head of Department at a leading Kolkata teaching hospital and has mentored over 50 junior
                            gynaecologists and fertility specialists throughout her career.
                        </p>
                        <p>
                            Dr. Ghosh is a published researcher with contributions to peer-reviewed national and international journals.
                            Her depth of experience brings an invaluable perspective to complex and challenging fertility cases at Maatritva IVF.
                        </p>
                    </div>
                </div>
            </section>

            {/* Specialisations */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">Specialisations</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            'Infertility Treatment & ART',
                            'Reproductive Endocrinology',
                            'Advanced Laparoscopic Surgery',
                            'Menopausal Medicine',
                            'Recurrent Pregnancy Loss Management',
                            'Complex IVF Case Management',
                        ].map((spec) => (
                            <div key={spec} className="flex items-center gap-3 bg-cream px-5 py-4 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                                <span className="text-sm font-medium text-navy">{spec}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">Achievements & Recognition</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Star className="w-5 h-5 text-gold" />, text: '35+ years of dedicated clinical experience in infertility' },
                            { icon: <Award className="w-5 h-5 text-rose-deep" />, text: 'FRCOG — Fellow of the Royal College of Obstetricians and Gynaecologists, UK' },
                            { icon: <GraduationCap className="w-5 h-5 text-navy" />, text: 'International fellowship training in Reproductive Endocrinology' },
                            { icon: <Users className="w-5 h-5 text-sage" />, text: 'Former Head of Department at a leading Kolkata teaching hospital' },
                            { icon: <Heart className="w-5 h-5 text-rose-deep" />, text: 'Published researcher in peer-reviewed national and international journals' },
                            { icon: <Users className="w-5 h-5 text-navy" />, text: 'Mentored over 50 junior gynaecologists and fertility specialists' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100">
                                <div className="shrink-0 mt-0.5">{item.icon}</div>
                                <p className="text-sm text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                        Consult Dr. Chhabi Ghosh
                    </h2>
                    <p className="text-white/90 mb-8 text-lg">
                        35+ years of clinical wisdom and compassion. Request Dr. Ghosh for complex or challenging cases.
                    </p>
                    <Link
                        href="#book"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Book Your Consultation
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Dr. Chhabi Ghosh" />
        </>
    );
}
