import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Stethoscope, Heart, ShieldCheck, Microscope, Clock, Phone, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Best Infertility Specialist in Kolkata — Dr. Ankita Mandal | Maatritva IVF',
    description: 'Consult the best infertility specialist in Kolkata. Dr. Ankita Mandal at Maatritva IVF provides comprehensive diagnosis and treatment for male and female infertility with high success rates.',
    path: '/best-infertility-specialist-in-kolkata',
    keywords: ['best infertility specialist Kolkata', 'infertility doctor Kolkata', 'infertility treatment Kolkata', 'female infertility specialist', 'male infertility doctor Kolkata'],
});

const faqs = [
    {
        question: 'Who is the best infertility specialist in Kolkata?',
        answer: '<b>Dr. Ankita Mandal</b> at Maatritva IVF is one of the most trusted infertility specialists in Kolkata. With 15+ years of experience, advanced training from Germany, and expertise in both male and female infertility, she provides thorough diagnostic evaluation and personalised treatment plans.',
    },
    {
        question: 'What causes infertility in women?',
        answer: 'Common female infertility causes include <b>PCOS, blocked fallopian tubes, endometriosis, low AMH/diminished ovarian reserve, ovulation disorders, uterine fibroids</b>, and age-related egg quality decline. About 40% of infertility cases have a female factor.',
    },
    {
        question: 'What causes infertility in men?',
        answer: 'Male infertility is caused by <b>low sperm count, poor motility, abnormal morphology, azoospermia, varicocele, hormonal imbalances</b>, and lifestyle factors. Male factor contributes to 40-50% of all infertility cases.',
    },
    {
        question: 'When should I see an infertility specialist?',
        answer: 'You should consult a specialist if you have been <b>trying to conceive for 12 months (if under 35) or 6 months (if over 35)</b> without success. Visit earlier if you have irregular periods, known PCOS, previous miscarriages, or known male factor issues.',
    },
    {
        question: 'What tests are done for infertility diagnosis?',
        answer: 'Infertility workup includes <b>blood tests (AMH, FSH, LH, thyroid, prolactin), pelvic ultrasound, HSG (tubal patency test), semen analysis</b>, and sometimes advanced tests like DNA fragmentation, karyotyping, or diagnostic laparoscopy.',
    },
    {
        question: 'Can infertility be cured?',
        answer: 'Most causes of infertility are <b>treatable or can be overcome</b> with appropriate medical or surgical treatment, or assisted reproductive technologies like IUI and IVF. The right diagnosis is the first step towards the right solution.',
    },
    {
        question: 'What is the difference between IUI and IVF?',
        answer: '<b>IUI (Intrauterine Insemination)</b> involves placing processed sperm into the uterus during ovulation — it is simpler and less expensive. <b>IVF</b> involves retrieving eggs, fertilising them in a lab, and transferring embryos. IVF has higher success rates for complex cases.',
    },
    {
        question: 'Is infertility treatment painful?',
        answer: 'Most infertility treatments are <b>well-tolerated and not painful</b>. Blood tests and ultrasound are routine. IUI is a simple, painless office procedure. IVF egg retrieval is done under mild sedation. Embryo transfer is entirely painless.',
    },
    {
        question: 'How much does infertility treatment cost in Kolkata?',
        answer: 'Costs vary by treatment. <b>Ovulation induction is the most affordable, IUI is moderate, and IVF is the most comprehensive (and expensive)</b>. Maatritva IVF provides transparent pricing with a complete written estimate before treatment begins.',
    },
    {
        question: 'Can stress cause infertility?',
        answer: 'While stress alone rarely causes infertility, <b>chronic stress can disrupt hormonal balance, affect ovulation, and reduce sperm quality</b>. Managing stress through exercise, counselling, and relaxation techniques can support treatment outcomes.',
    },
];

export default function BestInfertilitySpecialistPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Best Infertility Specialist in Kolkata', url: '/best-infertility-specialist-in-kolkata' },
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
                            <Award className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Top-Rated Infertility Specialist</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Best Infertility Specialist in Kolkata — Dr. Ankita Mandal
                        </h1>
                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                            Comprehensive diagnosis and personalised treatment for both male and female infertility.
                            Evidence-based care backed by 15+ years of clinical experience.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">15+ Years Experience</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">Both Partners Evaluated</span>
                            <span className="px-3 py-1 bg-white/10 rounded-full text-white/90 text-xs">Germany-Trained</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book a Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                                <Phone className="w-4 h-4" /> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct Answer Block (AI Optimised) */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Is Infertility and When Should You See a Specialist?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>Infertility</strong> is defined as the inability to conceive after 12 months of regular,
                            unprotected intercourse (6 months if the woman is over 35). It affects approximately 15-20% of
                            couples in India. An infertility specialist evaluates both partners, identifies the root cause,
                            and recommends the most appropriate treatment — from lifestyle changes to IVF.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Common Causes of Infertility</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl p-5 border border-gray-100">
                            <h4 className="font-heading font-bold text-navy mb-3 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-rose-deep" /> Female Factors
                            </h4>
                            <ul className="space-y-2">
                                {['PCOS (Polycystic Ovary Syndrome)', 'Blocked fallopian tubes', 'Endometriosis', 'Low AMH / diminished ovarian reserve', 'Ovulation disorders', 'Uterine fibroids or polyps', 'Age-related egg quality decline'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl p-5 border border-gray-100">
                            <h4 className="font-heading font-bold text-navy mb-3 flex items-center gap-2">
                                <Stethoscope className="w-5 h-5 text-navy" /> Male Factors
                            </h4>
                            <ul className="space-y-2">
                                {['Low sperm count (oligospermia)', 'Poor motility (asthenospermia)', 'Abnormal morphology', 'Azoospermia (no sperm)', 'Varicocele', 'Hormonal imbalances', 'Lifestyle factors (smoking, obesity)'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnostic Approach */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        How Does Dr. Ankita Mandal Diagnose Infertility?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        A thorough diagnosis is the foundation of successful treatment. Dr. Ankita evaluates <strong>both
                            partners simultaneously</strong> during the first visit — because infertility is a couple&apos;s condition,
                        not an individual&apos;s.
                    </p>
                    <div className="space-y-5">
                        {[
                            { step: '1', title: 'Detailed Medical History', desc: 'Complete review of menstrual history, previous pregnancies, surgeries, medical conditions, medications, and lifestyle for both partners.' },
                            { step: '2', title: 'Hormonal Blood Tests', desc: 'AMH, FSH, LH, oestradiol, thyroid function, prolactin, and testosterone levels to assess ovarian reserve and hormonal balance.' },
                            { step: '3', title: 'Pelvic Ultrasound & AFC', desc: 'Baseline ultrasound to evaluate uterine anatomy, ovarian morphology, and antral follicle count (AFC) — a key indicator of ovarian reserve.' },
                            { step: '4', title: 'Semen Analysis', desc: 'Comprehensive sperm assessment including count, motility, morphology, and volume. Advanced tests like DNA fragmentation if needed.' },
                            { step: '5', title: 'Tubal Patency Assessment', desc: 'HSG (Hysterosalpingography) to check whether fallopian tubes are open. Laparoscopy may be recommended in select cases.' },
                            { step: '6', title: 'Personalised Treatment Plan', desc: 'Based on all findings, Dr. Ankita designs a step-wise treatment plan — starting with the simplest effective option and escalating only when needed.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-5 items-start">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-base font-bold text-navy mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Treatment Options */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Are the Treatment Options for Infertility?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Treatment depends on the diagnosed cause. Dr. Ankita always recommends the <strong>simplest effective
                            treatment first</strong> — not every couple needs IVF. Here are the main options available at Maatritva IVF:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: 'Lifestyle & Medication', href: '/conditions/pcos-treatment', desc: 'Weight management, ovulation induction medications for milder cases.' },
                            { label: 'IUI (Insemination)', href: '/services/iui-treatment', desc: 'Processed sperm placed in uterus. Effective for mild male factor, unexplained infertility.' },
                            { label: 'IVF Treatment', href: '/services/ivf-treatment', desc: 'Lab fertilisation and embryo transfer. For complex or recurrent cases.' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment', desc: 'Single sperm injection. Essential for severe male factor.' },
                            { label: 'Laparoscopic Surgery', href: '/services/laparoscopic-surgery', desc: 'For endometriosis, fibroids, tubal repair, adhesions.' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment', desc: 'TESA/PESA, varicocele repair, hormonal therapy.' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-rose-pale hover:shadow-md transition-all group">
                                <h3 className="font-heading text-base font-bold text-navy group-hover:text-rose-deep transition-colors mb-1 flex items-center gap-2">
                                    {item.label} <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-rose-deep" />
                                </h3>
                                <p className="text-xs text-gray-600">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Dr Ankita */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        Why Choose Dr. Ankita Mandal for Infertility Treatment?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Both Partners Evaluated Together', desc: 'From the very first visit, both male and female factors are assessed simultaneously. This saves time and ensures nothing is missed.' },
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'Root-Cause Diagnosis', desc: 'Dr. Ankita doesn\'t just treat symptoms. She identifies the precise cause of infertility through thorough investigation before recommending treatment.' },
                            { icon: <Star className="w-6 h-6 text-gold" />, title: 'Step-Wise Treatment Approach', desc: 'Simple treatments are tried first. IVF is recommended only when simpler options have been adequately tried or when the diagnosis warrants it.' },
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Emotional Support & Counselling', desc: 'Our dedicated counselling team supports you throughout the journey. Infertility is emotionally challenging — you\'re never alone at Maatritva.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-cream rounded-2xl p-6 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection faqs={faqs} title="Frequently Asked Questions — Infertility Specialist in Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                        Start Your Fertility Journey Today
                    </h2>
                    <p className="text-white/90 mb-8 text-lg">
                        Don&apos;t let infertility define your story. Book a consultation with Dr. Ankita Mandal
                        and take the first step towards parenthood.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                            <Clock className="w-4 h-4" /> Book Appointment
                        </Link>
                        <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                            <Phone className="w-4 h-4" /> Call Now
                        </a>
                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
