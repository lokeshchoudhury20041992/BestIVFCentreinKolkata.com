import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Star, Users, Heart, ShieldCheck, Microscope, IndianRupee, Clock, Phone, MessageCircle, Stethoscope, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Best IVF Specialist in Kolkata — Dr. Ankita Mandal | Maatritva IVF',
    description: 'Looking for the best IVF specialist in Kolkata? Dr. Ankita Mandal at Maatritva IVF offers personalised, evidence-based fertility care with consistently high success rates. 15+ years experience. 15,000+ patients. Book a consultation today.',
    path: '/best-ivf-specialist-in-kolkata',
    keywords: ['best IVF specialist in Kolkata', 'best IVF doctor Kolkata', 'top IVF specialist Kolkata', 'IVF expert Kolkata', 'Dr Ankita Mandal IVF', 'best fertility doctor Kolkata'],
});

const faqs = [
    {
        question: 'Who is the best IVF specialist in Kolkata?',
        answer:
            '<b>Dr. Ankita Mandal</b> at Maatritva IVF is widely regarded as one of the best IVF specialists in Kolkata. With over 15 years of clinical experience, advanced training from KIEL Germany, thousands of successful IVF cycles, and a personalised approach to each patient, she has built a reputation for excellence and compassion in fertility care.',
    },
    {
        question: 'What is the IVF success rate at Maatritva IVF?',
        answer:
            'At Maatritva IVF, clinical pregnancy rates are <b>consistently strong across all age groups</b>. Women under 35 typically achieve success rates of 45-55% per cycle. Rates for 35-40 are 35-45%, and for 40+ they are 20-30%. Dr. Ankita provides individualised success estimates based on your specific diagnosis, age, and ovarian reserve.',
    },
    {
        question: 'How much does IVF cost in Kolkata?',
        answer:
            'IVF costs at Maatritva IVF are <b>transparent and competitive</b>. A basic IVF cycle starts from a consultation-based estimate, while advanced IVF with ICSI is higher. The final cost depends on your protocol, medications needed, and additional procedures like ICSI, blastocyst culture, or PGT. We provide a complete written breakdown before treatment begins — no hidden charges.',
    },
    {
        question: 'Is IVF treatment painful?',
        answer:
            'IVF is <b>not painful</b>. The hormone injections are subcutaneous (under the skin) and well-tolerated. Egg retrieval is performed under mild sedation — most patients feel no pain. Embryo transfer is completely painless and takes just 5-10 minutes. Most women continue normal activities throughout the cycle.',
    },
    {
        question: 'How long does one IVF cycle take?',
        answer:
            'A typical IVF cycle takes <b>approximately 4-6 weeks</b> from the start of ovarian stimulation to the pregnancy blood test. This includes 10-12 days of stimulation, egg retrieval, 3-5 days of embryo culture, embryo transfer, and a 14-day wait before the pregnancy test.',
    },
    {
        question: 'What is the best age for IVF treatment?',
        answer:
            'IVF success rates are highest for <b>women under 35</b>. Between 35-37, rates remain good. After 38, there is a gradual decline, and after 42-43, donor eggs are often recommended for the best outcomes. However, Dr. Ankita has helped women of all ages — the right protocol makes a significant difference.',
    },
    {
        question: 'Does Dr. Ankita Mandal personally handle every IVF case?',
        answer:
            'Yes. Dr. Ankita <b>personally oversees every patient\'s treatment</b> from initial consultation through stimulation monitoring, egg retrieval decisions, embryo transfer, and pregnancy confirmation. You will not be handed off to a junior doctor at any stage.',
    },
    {
        question: 'What are the risks of IVF?',
        answer:
            'IVF is a <b>safe, well-established procedure</b> performed for over 45 years worldwide. Minor risks include bloating, mild cramping, and very rarely ovarian hyperstimulation syndrome (OHSS). Dr. Ankita uses careful monitoring and modern protocols to minimise all risks. The vast majority of patients have no complications.',
    },
    {
        question: 'Can male infertility be treated with IVF?',
        answer:
            'Absolutely. <b>ICSI (Intracytoplasmic Sperm Injection)</b> allows us to achieve fertilisation even with very low sperm count or poor motility. For men with azoospermia (no sperm in ejaculate), surgical sperm retrieval (TESA/PESA) combined with ICSI offers excellent results.',
    },
    {
        question: 'Does Maatritva IVF offer egg freezing?',
        answer:
            'Yes. We offer <b>oocyte cryopreservation (egg freezing)</b> for women who wish to preserve their fertility. This is ideal for women planning to delay motherhood, facing medical treatments like chemotherapy, or wanting fertility insurance. Eggs frozen before age 35 yield the best future results.',
    },
    {
        question: 'Can I book an online consultation with Dr. Ankita Mandal?',
        answer:
            'Yes. Dr. Ankita offers <b>online video consultations</b> for initial evaluations, follow-ups, and second opinions. This is especially useful for outstation patients and international patients from Bangladesh and Northeast India.',
    },
    {
        question: 'How is Maatritva IVF different from other IVF centres in Kolkata?',
        answer:
            'Maatritva IVF stands out because of <b>Dr. Ankita\'s personal involvement in every case, our state-of-the-art laboratory with time-lapse monitoring, transparent pricing, and our genuine patient-first philosophy</b>. We never recommend unnecessary treatments and always provide honest success rate expectations.',
    },
];

export default function BestIVFSpecialistPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Best IVF Specialist in Kolkata', url: '/best-ivf-specialist-in-kolkata' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(faqs)} />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 1 — HERO AUTHORITY BLOCK
            ═══════════════════════════════════════════════════════════════ */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                                <Award className="w-4 h-4 text-gold" />
                                <span className="text-sm text-white/90 font-medium">Top-Rated IVF Specialist in Kolkata</span>
                            </div>
                            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                                Best IVF Specialist in Kolkata — Advanced Fertility Care by Dr. Ankita Mandal
                            </h1>
                            <p className="text-rose-pale font-medium text-lg mb-3">
                                Founder Director, Maatritva Fertility IVF & Healthcare
                            </p>
                            <p className="text-white/70 text-sm mb-6">
                                MBBS · MS (OBG) · Fellowship in Infertility · Advanced Diploma ART (KIEL, Germany)
                            </p>

                            {/* Quick credibility highlights */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                                {[
                                    { value: '15+', label: 'Years Experience' },
                                    { value: '15K+', label: 'Patients Treated' },
                                    { value: 'Top 5', label: 'Gynaecologist' },
                                    { value: 'KIEL', label: 'Germany Trained' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                                        <p className="text-white font-heading font-bold text-lg">{stat.value}</p>
                                        <p className="text-white/60 text-xs">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#book"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book a Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="tel:+91XXXXXXXXXX"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-2 hidden lg:flex justify-center">
                            <div className="w-80 h-80 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <Stethoscope className="w-24 h-24 text-white/20" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                                    <p className="text-white font-heading font-bold text-sm">Dr. Ankita Mandal</p>
                                    <p className="text-white/70 text-xs">IVF Specialist & Gynaecologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 2 — DIRECT ANSWER BLOCK (AI OVERVIEW OPTIMISED)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Who Is the Best IVF Specialist in Kolkata?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>Dr. Ankita Mandal</strong> is widely recognised as one of the best IVF specialists in Kolkata.
                            She is the Founder Director of Maatritva Fertility IVF & Healthcare, with over 15 years of experience
                            in reproductive medicine, an Advanced Diploma in ART from KIEL, Germany, and a Fellowship in Infertility.
                            She has treated over 15,000 patients with a personalised, evidence-based approach to fertility care.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">What Makes a Great IVF Specialist?</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Choosing the right IVF specialist is the most important decision in your fertility journey.
                        The doctor&apos;s expertise directly impacts your success rate. Here are the key qualities to look for:
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            'Specialised training in reproductive medicine (not just general gynaecology)',
                            'Thousands of completed IVF cycles with verifiable outcomes',
                            'A well-equipped, independently managed IVF laboratory',
                            'Personalised protocols — not one-size-fits-all stimulation',
                            'Transparent communication about success rates, costs, and realistic expectations',
                            'Emotional support and counselling as part of the treatment process',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        Dr. Ankita Mandal meets every one of these criteria.
                        Her approach combines clinical rigour with genuine empathy — she treats every patient as an individual,
                        not a number.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 3 — ABOUT DR. ANKITA MANDAL
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        About Dr. Ankita Mandal — Kolkata&apos;s Trusted IVF Expert
                    </h2>
                    <div className="prose prose-gray max-w-none space-y-4 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Dr. Ankita Mandal is a <strong>Consultant Gynaecologist, Obstetrician, Infertility Specialist,
                                and Gynaecological Laparoscopic Surgeon</strong>. She graduated from SCB Medical College, Cuttack
                            and completed her MS in Obstetrics & Gynaecology from RIMS, Ranchi. She then earned a prestigious
                            Fellowship in Infertility and an Advanced Diploma in Reproductive Medicine & ART from KIEL, Germany.
                        </p>
                        <p>
                            With <strong>over 15 years of hands-on clinical experience</strong> and thousands of completed IVF,
                            ICSI, and IUI cycles, Dr. Ankita has developed deep expertise in managing even the most complex
                            fertility cases — including recurrent IVF failures, low AMH/diminished ovarian reserve, severe male
                            factor infertility, and unexplained infertility.
                        </p>
                        <p>
                            She is a proud member of <strong>ISOG, FOGSI, ACOG</strong>, and a Fellow of <strong>FIAOG</strong>.
                            She is also a pioneer in adopting time-lapse embryo monitoring technology in Eastern India and regularly
                            speaks at national and international fertility conferences.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        {[
                            { label: 'Qualifications', value: 'MBBS, MS (OBG), Fellowship Infertility, Diploma ART (Germany)' },
                            { label: 'Experience', value: '15+ years in Reproductive Medicine' },
                            { label: 'Special Focus', value: 'Complex IVF, Low AMH, Male Factor, Recurrent Failure' },
                            { label: 'Professional Bodies', value: 'ISOG, FOGSI, ACOG, FIAOG' },
                        ].map((item) => (
                            <div key={item.label} className="bg-cream rounded-xl p-5 border border-gray-100">
                                <p className="text-xs font-semibold text-rose-deep uppercase tracking-wide mb-1">{item.label}</p>
                                <p className="text-sm text-navy font-medium">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 4 — WHY CHOOSING THE RIGHT IVF SPECIALIST MATTERS
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Why Choosing the Right IVF Specialist Matters
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        IVF is not a one-size-fits-all treatment. The specialist you choose directly determines your stimulation
                        protocol, embryo selection strategy, and ultimately your success rate. Here is why your choice matters:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <Star className="w-6 h-6 text-gold" />,
                                title: 'Impact on Success Rates',
                                desc: 'An experienced specialist tailors your stimulation protocol to your unique biology — your AMH, FSH, body weight, and previous response. This personalisation is what separates a 30% success rate from a 50% success rate.',
                            },
                            {
                                icon: <Microscope className="w-6 h-6 text-navy" />,
                                title: 'Laboratory Quality',
                                desc: 'The IVF lab is where fertilisation, embryo culture, and selection happen. A specialist who controls their own lab ensures optimal conditions. Maatritva\'s lab features time-lapse monitoring, HEPA-filtered air, and dedicated embryologists.',
                            },
                            {
                                icon: <Heart className="w-6 h-6 text-rose-deep" />,
                                title: 'Personalised Protocols',
                                desc: 'Cookie-cutter protocols waste your time and money. Dr. Ankita designs individualised stimulation protocols — from mild stimulation for low-reserve patients to antagonist protocols for PCOS patients at risk of hyperstimulation.',
                            },
                            {
                                icon: <ShieldCheck className="w-6 h-6 text-sage" />,
                                title: 'Complex Case Expertise',
                                desc: 'Recurrent IVF failures, poor embryo quality, thin endometrium — these complex cases require a specialist who has seen and solved them before. Dr. Ankita\'s 15+ years of experience makes this difference.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 5 — IVF TREATMENT PROCESS (STEP-BY-STEP)
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        How Does IVF Treatment Work? Step-by-Step Process
                    </h2>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        IVF (In Vitro Fertilisation) is a fertility treatment where eggs are collected from the ovaries,
                        fertilised with sperm in a laboratory, and the resulting embryo is transferred to the uterus to
                        achieve pregnancy. Here is how the process works at Maatritva IVF:
                    </p>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Initial Consultation & Diagnosis', desc: 'Dr. Ankita reviews your complete medical history, performs a baseline ultrasound, and orders blood tests (AMH, FSH, LH, thyroid) and semen analysis. This identifies the root cause and informs protocol design.' },
                            { step: '2', title: 'Personalised Protocol Design', desc: 'Based on your diagnosis, age, and ovarian reserve, a customised stimulation protocol is designed. This may range from a mild protocol for low AMH to an antagonist protocol for PCOS patients.' },
                            { step: '3', title: 'Ovarian Stimulation (10-12 Days)', desc: 'Daily hormone injections stimulate your ovaries to produce multiple mature eggs. Regular ultrasound scans and blood tests monitor follicle growth. Dosage is adjusted based on your response.' },
                            { step: '4', title: 'Trigger Injection & Egg Retrieval', desc: 'When follicles reach optimal size, a trigger injection finalises maturation. 34-36 hours later, eggs are retrieved under mild sedation — a painless 15-20 minute procedure.' },
                            { step: '5', title: 'Fertilisation & Embryo Culture', desc: 'Eggs are fertilised using ICSI (single sperm injection). Embryos are cultured for 3-5 days in our time-lapse incubator, allowing continuous monitoring without disturbance.' },
                            { step: '6', title: 'Embryo Selection & Transfer', desc: 'The best-quality embryo is selected and gently placed into the uterus. This is a painless 5-10 minute procedure. We typically recommend single embryo transfer (SET) to avoid multiple pregnancy risks.' },
                            { step: '7', title: 'Pregnancy Test (14 Days Later)', desc: 'A blood test (beta-hCG) confirms pregnancy approximately 14 days after transfer. If positive, regular monitoring begins. Our counselling team provides emotional support throughout the wait.' },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-navy mb-1">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 6 — IVF SUCCESS RATE IN KOLKATA
            ═══════════════════════════════════════════════════════════════ */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        What Is the IVF Success Rate in Kolkata?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        IVF success rates vary by age, diagnosis, and laboratory quality. At Maatritva IVF, our clinical
                        pregnancy rates are consistently strong. Here is an honest, age-based breakdown:
                    </p>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-8">
                        <div className="grid grid-cols-3 bg-navy text-white text-center py-3 text-sm font-semibold">
                            <div>Age Group</div>
                            <div>Success Rate (per cycle)</div>
                            <div>Key Factor</div>
                        </div>
                        {[
                            { age: 'Under 35', rate: '45-55%', factor: 'Optimal egg quality & quantity' },
                            { age: '35-37', rate: '38-48%', factor: 'Good reserves, slightly lower quality' },
                            { age: '38-40', rate: '28-38%', factor: 'Protocol customisation critical' },
                            { age: '40-42', rate: '15-25%', factor: 'Consider PGT for embryo selection' },
                            { age: '43+', rate: '5-15%', factor: 'Donor eggs often recommended' },
                        ].map((row, i) => (
                            <div key={row.age} className={`grid grid-cols-3 text-center py-3 text-sm ${i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}`}>
                                <div className="font-semibold text-navy">{row.age}</div>
                                <div className="font-bold text-rose-deep">{row.rate}</div>
                                <div className="text-gray-600 text-xs px-2">{row.factor}</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Factors That Influence IVF Success</h3>
                    <ul className="space-y-2 mb-6">
                        {[
                            'Egg quality and ovarian reserve (AMH, AFC)',
                            'Sperm quality — morphology, motility, DNA fragmentation',
                            'Embryo quality and laboratory conditions',
                            'Uterine environment — endometrial thickness and pattern',
                            'Lifestyle — BMI, smoking, stress levels',
                            'The IVF specialist\'s experience and protocol selection',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-1" />
                                <span className="text-gray-700 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        Dr. Ankita provides <strong>honest, individualised success estimates</strong> during your first
                        consultation — never inflated numbers, always realistic expectations.
                    </p>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 7 — IVF TREATMENT COST IN KOLKATA
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4">
                        How Much Does IVF Cost in Kolkata?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        IVF cost in Kolkata varies based on the type of treatment, medications required, and additional
                        procedures. At Maatritva IVF, we believe in <strong>complete cost transparency</strong> — you will
                        receive a detailed written breakdown before any treatment begins.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-cream rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-3">
                                <IndianRupee className="w-5 h-5 text-navy" />
                                <h3 className="font-heading text-lg font-bold text-navy">What Affects IVF Cost?</h3>
                            </div>
                            <ul className="space-y-2">
                                {['Type of protocol (standard IVF vs ICSI)', 'Medication dosage (depends on ovarian response)', 'Additional procedures (PGT, blastocyst culture, LAH)', 'Frozen embryo transfer cycles', 'Donor egg or sperm programmes'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-cream rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-sage" />
                                <h3 className="font-heading text-lg font-bold text-navy">Our Transparency Promise</h3>
                            </div>
                            <ul className="space-y-2">
                                {['Complete written cost estimate before treatment', 'No hidden charges or surprise bills', 'Medication costs listed separately', 'Multi-cycle packages at reduced rates', 'Flexible payment options available'].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-3 h-3 text-sage shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link href="/ivf-cost-kolkata" className="inline-flex items-center gap-2 text-rose-deep font-semibold hover:underline">
                            View Detailed IVF Cost Breakdown <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 8 — ADVANCED FERTILITY SERVICES OFFERED
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-cream" >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-4 text-center">
                        Advanced Fertility Services at Maatritva IVF
                    </h2>
                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
                        Beyond IVF, we offer a complete range of fertility services. Dr. Ankita recommends the simplest
                        effective treatment first — IVF is one option, not the only option.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { label: 'IVF Treatment', href: '/services/ivf-treatment', desc: 'Complete IVF cycle with personalised stimulation. Our flagship treatment.' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment', desc: 'Single sperm injection per egg. Essential for male factor infertility.' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment', desc: 'Simpler, less invasive option for mild fertility issues.' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing', desc: 'Preserve your fertility for the future. Ideal for women under 35.' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment', desc: 'Comprehensive diagnosis and treatment for male factor.' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf', desc: 'For women with diminished ovarian reserve or advanced age.' },
                            { label: 'TESA / PESA', href: '/services/testicular-sperm-extraction', desc: 'Surgical sperm retrieval for azoospermia cases.' },
                            { label: 'Blastocyst Transfer', href: '/services/blastocyst-transfer', desc: 'Day 5 embryo transfer for higher implantation rates.' },
                            { label: 'PGD / PGS Testing', href: '/services/ivf-with-pgd-pgs', desc: 'Genetic screening of embryos before transfer.' },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-rose-pale hover:shadow-md transition-all group"
                            >
                                <h3 className="font-heading text-base font-bold text-navy mb-1 group-hover:text-rose-deep transition-colors flex items-center gap-2">
                                    {item.label}
                                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-rose-deep transition-colors" />
                                </h3>
                                <p className="text-xs text-gray-600">{item.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 9 — WHY MAATRITVA IVF STANDS OUT
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-white" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        Why Maatritva IVF Is Kolkata&apos;s Most Trusted Fertility Centre
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                icon: <Microscope className="w-6 h-6 text-navy" />,
                                title: 'State-of-the-Art IVF Laboratory',
                                desc: 'Our laboratory features HEPA-filtered clean rooms, time-lapse embryo monitoring (EmbryoScope), dedicated ICSI workstations, and advanced vitrification equipment. Lab quality is the single biggest factor in IVF success — ours is among the best in Eastern India.',
                            },
                            {
                                icon: <MapPin className="w-6 h-6 text-rose-deep" />,
                                title: 'Information Centres Across Region',
                                desc: 'We have expanded our reach with information and consultation centres to serve patients from Salt Lake, New Town, South Kolkata, Howrah, North Kolkata, Barasat, and even Bangladesh. No matter where you are, expert fertility care is accessible.',
                            },
                            {
                                icon: <Users className="w-6 h-6 text-sage" />,
                                title: 'Bangladesh & International Patient Support',
                                desc: 'Kolkata is the closest Indian metro to Bangladesh. We provide medical visa assistance, airport pickup, accommodation coordination, and Bengali-speaking staff for a seamless experience. IVF in Kolkata costs 30-50% less than premium Dhaka centres.',
                            },
                            {
                                icon: <Heart className="w-6 h-6 text-rose-deep" />,
                                title: 'Genuinely Personalised Care',
                                desc: 'Dr. Ankita personally handles every case from start to finish. You will never be handed off to a junior doctor. Treatment plans are designed for your biology, not a generic protocol. We treat patients, not numbers.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-5 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-cream flex items-center justify-center">{item.icon}</div>
                                <div>
                                    <h3 className="font-heading text-lg font-bold text-navy mb-1">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 10 — TESTIMONIALS & PATIENT EXPERIENCE
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-cream" >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
                        What Our Patients Say
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                text: 'After 3 failed IVF cycles at another centre, we almost gave up. Dr. Ankita reviewed everything, changed the protocol completely, and we conceived on the very first attempt with her. She is truly the best.',
                                name: 'Rina & Sourav',
                                area: 'Salt Lake, Kolkata',
                            },
                            {
                                text: 'We travelled from Dhaka for IVF. The visa help, airport pickup, and Bengali-speaking staff made everything so easy. Dr. Ankita treated us like family. We now have twin girls.',
                                name: 'Fatima & Rashed',
                                area: 'Dhaka, Bangladesh',
                            },
                            {
                                text: 'At 39, I was told my chances were very low. Dr. Ankita was honest but optimistic. She designed a special protocol for my low AMH. I am now 4 months pregnant. Forever grateful.',
                                name: 'Priya',
                                area: 'New Town, Kolkata',
                            },
                            {
                                text: 'The transparency at Maatritva is refreshing. We knew every cost upfront. Dr. Ankita personally monitored every scan. No other clinic gave us this level of attention.',
                                name: 'Ananya & Debashish',
                                area: 'Howrah',
                            },
                        ].map((item) => (
                            <div key={item.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-4 h-4 text-gold fill-gold" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                                    &ldquo;{item.text}&rdquo;
                                </p>
                                <div>
                                    <p className="font-heading font-bold text-navy text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.area}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 11 — FAQs (12 OPTIMISED QUESTIONS)
            ═══════════════════════════════════════════════════════════════ */}
            < FAQSection faqs={faqs} title="Frequently Asked Questions — Best IVF Specialist in Kolkata" />

            {/* ═══════════════════════════════════════════════════════════════
                SECTION 12 — STRONG CONVERSION CTA
            ═══════════════════════════════════════════════════════════════ */}
            < section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book" >
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Fertility Journey?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg">
                        Book a consultation with Dr. Ankita Mandal — Kolkata&apos;s most trusted IVF specialist.
                        Your first step towards parenthood starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#book"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rose-deep font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <Clock className="w-4 h-4" />
                            Book Appointment
                        </Link>
                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section >
        </>
    );
}
