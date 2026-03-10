import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Star, GraduationCap, Users, Heart, MapPin, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/schema-helpers';

export const metadata: Metadata = generatePageMetadata({
    title: 'Dr. Ankita Mandal — Best IVF Specialist & Gynaecologist in Kolkata',
    description: 'Dr. Ankita Mandal is the founder of Maatritva IVF and one of Kolkata\'s most trusted IVF specialists. MBBS, MS (OBG), Fellowship in Infertility, Advanced Diploma ART (Germany). 15+ years experience.',
    path: '/doctors/dr-ankita-mandal',
    keywords: ['Dr Ankita Mandal', 'best IVF doctor Kolkata', 'best gynecologist Kolkata', 'IVF specialist Kolkata', 'Dr Ankita Mandal Maatritva'],
});

const faqs = [
    {
        question: 'What are Dr. Ankita Mandal\'s qualifications?',
        answer:
            'Dr. Ankita Mandal holds an <b>MBBS from SCB Medical College, Cuttack, MS (OBG) from RIMS, Ranchi, a Fellowship in Infertility, and an Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany</b>. She is a member of ISOG, FOGSI, ACOG, and a Fellow of FIAOG.',
    },
    {
        question: 'How many years of experience does Dr. Ankita Mandal have?',
        answer:
            'Dr. Ankita Mandal has <b>over 15 years of clinical experience</b> in gynaecology, obstetrics, and reproductive medicine, with thousands of successful IVF and ICSI cycles.',
    },
    {
        question: 'Does Dr. Ankita Mandal personally handle IVF procedures?',
        answer:
            'Yes. Dr. Ankita <b>personally oversees every patient\'s treatment</b> — from initial consultation through stimulation monitoring, egg retrieval, embryo transfer decisions, and pregnancy confirmation. You will not be handed off to another doctor.',
    },
    {
        question: 'Where does Dr. Ankita Mandal practise?',
        answer:
            'Dr. Ankita Mandal is the <b>Founder Director of Maatritva Fertility IVF & Healthcare</b>, located in New Town, Kolkata. The clinic is just 15 minutes from Kolkata Airport and easily accessible from across the city.',
    },
    {
        question: 'Can I book an online consultation with Dr. Ankita Mandal?',
        answer:
            'Yes. Dr. Ankita offers <b>online video consultations</b> for initial evaluations, follow-ups, and second opinions. This is especially useful for outstation patients and patients from Bangladesh.',
    },
];

function getPersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: 'Dr. Ankita Mandal',
        url: `${SITE_URL}/doctors/dr-ankita-mandal`,
        image: `${SITE_URL}/images/dr-ankita-mandal.jpg`,
        description: 'Dr. Ankita Mandal is the Founder Director of Maatritva Fertility IVF & Healthcare, Kolkata. She is one of the best IVF specialists and gynaecologists in Kolkata with over 15 years of experience.',
        medicalSpecialty: 'Reproductive Medicine',
        jobTitle: 'Founder Director & IVF Specialist',
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
        alumniOf: [
            { '@type': 'CollegeOrUniversity', name: 'SCB Medical College, Cuttack' },
            { '@type': 'CollegeOrUniversity', name: 'RIMS, Ranchi' },
            { '@type': 'CollegeOrUniversity', name: 'KIEL, Germany' },
        ],
        hasCredential: [
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBBS' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MS (Obstetrics & Gynaecology)' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Fellowship in Infertility' },
            { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)' },
        ],
        memberOf: [
            { '@type': 'Organization', name: 'Indian Society of Obstetrics & Gynaecology (ISOG)' },
            { '@type': 'Organization', name: 'Federation of Obstetric & Gynaecological Societies of India (FOGSI)' },
            { '@type': 'Organization', name: 'American College of Obstetricians and Gynecologists (ACOG)' },
            { '@type': 'Organization', name: 'FIAOG' },
        ],
        sameAs: [
            'https://www.practo.com/kolkata/doctor/dr-ankita-mandal-gynaecologist-obstetrician',
            'https://www.google.com/maps/place/Maatritva+Fertility+IVF',
        ],
        knowsAbout: ['IVF', 'ICSI', 'IUI', 'Infertility Treatment', 'Laparoscopic Surgery', 'High-Risk Pregnancy', 'PCOS', 'Endometriosis', 'Egg Freezing', 'Male Infertility'],
        availableService: [
            { '@type': 'MedicalProcedure', name: 'IVF Treatment' },
            { '@type': 'MedicalProcedure', name: 'ICSI Treatment' },
            { '@type': 'MedicalProcedure', name: 'IUI Treatment' },
            { '@type': 'MedicalProcedure', name: 'Egg Freezing' },
            { '@type': 'MedicalProcedure', name: 'Laparoscopic Surgery' },
        ],
        areaServed: [
            { '@type': 'City', name: 'Kolkata' },
            { '@type': 'State', name: 'West Bengal' },
            { '@type': 'Country', name: 'Bangladesh' },
        ],
    };
}

export default function DrAnkitaMandal() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Doctors', url: '/doctors' },
        { name: 'Dr. Ankita Mandal', url: '/doctors/dr-ankita-mandal' },
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
                                <span className="text-sm text-white/90 font-medium">Founder & Director</span>
                            </div>
                            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">
                                Dr. Ankita Mandal
                            </h1>
                            <p className="text-rose-pale font-medium text-lg mb-4">
                                Best IVF Specialist & Gynaecologist in Kolkata
                            </p>
                            <p className="text-white/70 text-sm mb-6">
                                MBBS (SCB Medical College, Cuttack) · MS — OBG (RIMS, Ranchi) · Fellowship in Infertility ·
                                Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">15+ Years Experience</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">15,000+ Patients</span>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">ISOG · FOGSI · ACOG</span>
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
                    <h2 className="font-heading text-3xl font-bold text-navy mb-6">About Dr. Ankita Mandal</h2>
                    <div className="prose prose-gray max-w-none space-y-4 text-gray-700">
                        <p>
                            Dr. Ankita Mandal is the <strong>Founder Director of Maatritva Fertility IVF & Healthcare</strong>, Kolkata&apos;s most trusted fertility centre.
                            Recognised among the top 5 gynaecologists in Kolkata by over 15,000 satisfied patients, she is a Consultant Gynaecologist, Obstetrician,
                            Infertility Specialist, and Gynaecological Laparoscopic Surgeon.
                        </p>
                        <p>
                            A graduate of <strong>SCB Medical College, Cuttack</strong> and <strong>RIMS, Ranchi</strong>, Dr. Ankita holds a prestigious
                            Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART from <strong>KIEL, Germany</strong>.
                            She specialises in colposcopy, hysteroscopy, and gynaecological ultrasound.
                        </p>
                        <p>
                            Dr. Ankita&apos;s personalised approach empowers patients to make informed decisions about their fertility and reproductive health.
                            She is a proud member of <strong>ISOG, FOGSI, ACOG</strong>, and a Fellow of <strong>FIAOG</strong> — reflecting her commitment
                            to the highest standards of medical practice.
                        </p>
                        <p>
                            Whether you need routine check-ups, advanced fertility treatments, or expert advice, Dr. Ankita Mandal is your partner
                            for top-notch gynaecological care in Kolkata. She is a pioneer in adopting time-lapse embryo monitoring in Eastern India
                            and a regular speaker at national and international fertility conferences.
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
                            'In Vitro Fertilisation (IVF)',
                            'ICSI (Intracytoplasmic Sperm Injection)',
                            'Intrauterine Insemination (IUI)',
                            'Colposcopy',
                            'Hysteroscopy',
                            'Gynaecological Ultrasound',
                            'Recurrent Implantation Failure',
                            'High-Risk Pregnancy Management',
                            'Gynaecological Laparoscopic Surgery',
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
                            { icon: <Star className="w-5 h-5 text-gold" />, text: 'Best Gynecologist in Kolkata — acknowledged by 15,000+ satisfied patients' },
                            { icon: <Award className="w-5 h-5 text-rose-deep" />, text: 'Recognised among the Top 5 Gynecologists in Kolkata' },
                            { icon: <GraduationCap className="w-5 h-5 text-navy" />, text: 'Fellowship in Infertility & Advanced Diploma in Reproductive Medicine & ART (KIEL, Germany)' },
                            { icon: <GraduationCap className="w-5 h-5 text-navy" />, text: 'Graduate of SCB Medical College, Cuttack & RIMS, Ranchi' },
                            { icon: <Users className="w-5 h-5 text-sage" />, text: 'Member of ISOG, FOGSI, ACOG | Fellow of FIAOG' },
                            { icon: <Heart className="w-5 h-5 text-rose-deep" />, text: 'Pioneer of time-lapse embryo monitoring adoption in Eastern India' },
                            { icon: <MapPin className="w-5 h-5 text-gold" />, text: 'Regular speaker at national and international fertility conferences' },
                            { icon: <CheckCircle className="w-5 h-5 text-sage" />, text: 'Specialist in Colposcopy, Hysteroscopy & Gynaecological Ultrasound' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100">
                                <div className="shrink-0 mt-0.5">{item.icon}</div>
                                <p className="text-sm text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-navy mb-8 text-center">
                        Services by Dr. Ankita Mandal
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: 'IVF Treatment', href: '/services/ivf-treatment' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf' },
                            { label: 'Laparoscopic Surgery', href: '/services/laparoscopic-surgery' },
                            { label: 'Hysteroscopy', href: '/services/hysteroscopy' },
                            { label: 'High-Risk Pregnancy', href: '/services/high-risk-pregnancy' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 bg-cream px-5 py-4 rounded-xl border border-gray-100 hover:border-rose-pale hover:shadow-sm transition-all group"
                            >
                                <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                                <span className="text-sm font-medium text-navy group-hover:text-rose-deep transition-colors">{item.label}</span>
                                <ArrowRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-rose-deep transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                        Consult Dr. Ankita Mandal
                    </h2>
                    <p className="text-white/90 mb-8 text-lg">
                        15+ years of expertise, thousands of happy families. Start your fertility journey with confidence.
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

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Dr. Ankita Mandal" />
        </>
    );
}
