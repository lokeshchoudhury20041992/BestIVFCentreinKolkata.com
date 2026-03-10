import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Heart, ShieldCheck, Microscope, Clock, Phone, MessageCircle, Star, Baby, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Top Fertility Clinic in Kolkata — Maatritva IVF | Dr. Ankita Mandal',
    description: 'Looking for a trusted fertility clinic in Kolkata? Maatritva IVF offers IVF, IUI, ICSI, egg freezing, and complete fertility care. Led by Dr. Ankita Mandal. Transparent pricing.',
    path: '/fertility-clinic-kolkata',
    keywords: ['fertility clinic Kolkata', 'fertility centre Kolkata', 'fertility hospital Kolkata', 'fertility treatment Kolkata', 'best fertility clinic'],
});

const faqs = [
    {
        question: 'What is a fertility clinic?',
        answer: 'A fertility clinic is a <b>specialised medical centre</b> that diagnoses and treats couples struggling to conceive. It offers services ranging from basic ovulation induction to advanced treatments like IVF, ICSI, egg freezing, and surgical procedures for both male and female infertility.',
    },
    {
        question: 'Which is the best fertility clinic in Kolkata?',
        answer: '<b>Maatritva Fertility IVF & Healthcare</b> led by Dr. Ankita Mandal is one of Kolkata\'s most trusted fertility clinics. It combines experienced specialists, a modern laboratory, transparent pricing, and genuine patient care.',
    },
    {
        question: 'What treatments does a fertility clinic offer?',
        answer: 'A comprehensive fertility clinic offers <b>ovulation induction, IUI, IVF, ICSI, egg freezing, embryo freezing, donor programmes, surgical procedures (laparoscopy, hysteroscopy), and male infertility treatment</b> including surgical sperm retrieval.',
    },
    {
        question: 'When should I visit a fertility clinic?',
        answer: 'Visit a fertility clinic if you have <b>been trying to conceive for 12 months (or 6 months if over 35)</b>, have irregular periods, known PCOS or endometriosis, a history of miscarriage, or any known male factor issue.',
    },
    {
        question: 'Do I need IVF, or are there simpler treatments?',
        answer: 'Not every couple needs IVF. <b>Many fertility issues can be treated with medication, lifestyle changes, or IUI</b>. Dr. Ankita always starts with the simplest effective treatment and escalates only when necessary.',
    },
    {
        question: 'How do I choose between fertility clinics?',
        answer: 'Look for <b>doctor expertise, lab quality (in-house lab is crucial), success rates (age-specific), patient reviews, cost transparency, and the clinic\'s approach to personalised care</b>. Avoid clinics that push IVF for every patient.',
    },
    {
        question: 'Is fertility treatment expensive?',
        answer: 'Costs vary by treatment. <b>Ovulation induction is affordable, IUI is moderate, and IVF is the most comprehensive option</b>. Maatritva IVF provides written cost estimates upfront with no hidden charges.',
    },
    {
        question: 'Can fertility clinics help with male infertility?',
        answer: 'Yes. Good fertility clinics evaluate <b>both partners from the first visit</b>. Male infertility treatments include lifestyle modifications, medication, IUI with processed sperm, ICSI, and surgical sperm retrieval (TESA/PESA).',
    },
    {
        question: 'Does Maatritva IVF offer counselling?',
        answer: 'Yes. We have <b>dedicated fertility counsellors</b> who provide emotional support, help you understand treatment options, and manage the stress that often accompanies the fertility journey.',
    },
    {
        question: 'Can I get a second opinion at Maatritva IVF?',
        answer: 'Absolutely. Dr. Ankita welcomes patients seeking <b>second opinions</b>. She reviews your previous reports, provides an honest assessment, and suggests the best path forward — even if it means a different approach.',
    },
];

export default function FertilityClinicPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Fertility Clinic Kolkata', url: '/fertility-clinic-kolkata' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                            <Heart className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Trusted Fertility Clinic</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Top Fertility Clinic in Kolkata — Maatritva IVF
                        </h1>
                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                            Complete fertility care under one roof — from diagnosis to conception. Led by Dr. Ankita Mandal
                            with 15+ years of reproductive medicine expertise.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">Complete Fertility Services</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">In-House IVF Lab</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">Transparent Pricing</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Answer */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Is a Fertility Clinic and How Can It Help You?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            A <strong>fertility clinic</strong> is a specialised medical centre that investigates, diagnoses, and treats
                            the causes of infertility in both men and women. Unlike general gynaecology practices, fertility clinics
                            offer advanced reproductive technologies like IVF, ICSI, and egg freezing, along with dedicated embryology
                            laboratories and fertility counselling services.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Our Approach to Fertility Care</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        At Maatritva IVF, we believe in a <strong>step-wise, evidence-based approach</strong>. Not every couple needs IVF.
                        We always start with the simplest effective treatment and escalate only when clinically indicated.
                    </p>
                    <div className="space-y-4">
                        {[
                            { step: '1', title: 'Comprehensive Evaluation', desc: 'Both partners evaluated from Day 1. Blood tests, ultrasound, semen analysis, and tubal assessment as needed.' },
                            { step: '2', title: 'Root-Cause Diagnosis', desc: 'We identify the specific cause — PCOS, tubal block, male factor, unexplained — before recommending any treatment.' },
                            { step: '3', title: 'Simplest Treatment First', desc: 'Ovulation induction, timed intercourse, or IUI may solve the problem. IVF is recommended only when simpler options are inadequate.' },
                            { step: '4', title: 'Advanced Treatment When Needed', desc: 'IVF, ICSI, donor programmes, PGD/PGS, and surgical interventions — all available under one roof with personalised protocols.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-5 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h4 className="font-heading text-base font-bold text-navy mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4 text-center">
                        What Services Does Our Fertility Clinic Offer?
                    </h2>
                    <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                        From basic fertility workup to the most advanced assisted reproductive technologies —
                        everything under one roof at Maatritva IVF.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: 'IVF Treatment', href: '/services/ivf-treatment', desc: 'Lab fertilisation & embryo transfer' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment', desc: 'Single sperm injection per egg' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment', desc: 'Simpler insemination procedure' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing', desc: 'Preserve fertility for the future' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment', desc: 'Complete male factor solutions' },
                            { label: 'Laparoscopy', href: '/services/laparoscopic-surgery', desc: 'Minimally invasive gynaecological surgery' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf', desc: 'For diminished ovarian reserve' },
                            { label: 'PGD/PGS Testing', href: '/services/ivf-with-pgd-pgs', desc: 'Genetic screening of embryos' },
                            { label: 'Hysteroscopy', href: '/services/hysteroscopy', desc: 'Diagnostic & operative uterine procedure' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="bg-cream rounded-xl p-5 border border-gray-100 hover:border-rose-pale hover:shadow-md transition-all group">
                                <h3 className="font-heading text-base font-bold text-navy group-hover:text-rose-deep transition-colors mb-1 flex items-center gap-2">
                                    {item.label} <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-rose-deep" />
                                </h3>
                                <p className="text-xs text-gray-600">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        Why Choose Maatritva IVF as Your Fertility Clinic?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Award className="w-6 h-6 text-gold" />, title: 'Dr. Ankita Mandal\'s Expertise', desc: '15+ years of dedicated reproductive medicine experience. Every patient treated personally from consultation to pregnancy confirmation.' },
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'World-Class Laboratory', desc: 'In-house lab with time-lapse monitoring, ICSI workstations, and vitrification. Among the best-equipped labs in Eastern India.' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'No Unnecessary Treatments', desc: 'We never recommend IVF when simpler treatments will work. Our philosophy: simplest effective treatment first.' },
                            { icon: <Users className="w-6 h-6 text-rose-deep" />, title: 'Holistic Patient Care', desc: 'Dedicated fertility counsellors, online consultations, and support for outstation and international patients.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Fertility Clinic Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Begin Your Journey to Parenthood</h2>
                    <p className="text-white/90 mb-8 text-lg">Expert fertility care with honesty, compassion, and transparency.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all"><Clock className="w-4 h-4" /> Book Appointment</Link>
                        <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"><Phone className="w-4 h-4" /> Call Now</a>
                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
                    </div>
                </div>
            </section>
        </>
    );
}
