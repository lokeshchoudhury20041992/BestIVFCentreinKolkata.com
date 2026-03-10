import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Baby, Heart, Microscope, ShieldCheck, Clock, Phone, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Best Test Tube Baby Centre in Kolkata — Maatritva IVF | Dr. Ankita Mandal',
    description: 'Looking for a test tube baby centre in Kolkata? Maatritva IVF by Dr. Ankita Mandal offers advanced IVF and ICSI treatment with high success rates. Transparent pricing. 15+ years experience.',
    path: '/test-tube-baby-centre-kolkata',
    keywords: ['test tube baby centre Kolkata', 'test tube baby Kolkata', 'test tube baby cost Kolkata', 'IVF test tube baby', 'best test tube baby centre'],
});

const faqs = [
    {
        question: 'What is a test tube baby?',
        answer: 'A "test tube baby" is the <b>colloquial term for a baby conceived through IVF (In Vitro Fertilisation)</b>. In IVF, eggs are retrieved from the ovaries, fertilised with sperm in a laboratory dish (not a test tube), and the resulting embryo is transferred to the uterus to achieve pregnancy.',
    },
    {
        question: 'Which is the best test tube baby centre in Kolkata?',
        answer: '<b>Maatritva Fertility IVF & Healthcare</b> by Dr. Ankita Mandal is one of the most trusted test tube baby (IVF) centres in Kolkata, with a modern ICSI-equipped lab, time-lapse monitoring, and consistently high success rates.',
    },
    {
        question: 'How is a test tube baby made?',
        answer: 'The process involves: <b>1) Stimulating the ovaries to produce multiple eggs, 2) Retrieving eggs under sedation, 3) Fertilising eggs with sperm in the lab (using ICSI), 4) Culturing embryos for 3-5 days, 5) Transferring the best embryo to the uterus</b>. The entire process takes about 4-6 weeks.',
    },
    {
        question: 'Is a test tube baby the same as a normal baby?',
        answer: 'Yes. <b>A test tube baby (IVF baby) is completely normal</b>. The difference is only in how fertilisation occurs — in a lab instead of inside the body. Once the embryo implants, the pregnancy and baby development are identical to natural conception.',
    },
    {
        question: 'What is the success rate of test tube baby treatment?',
        answer: 'Success rates depend on age and diagnosis. At Maatritva IVF: <b>45-55% for women under 35, 35-45% for 35-40, and 20-30% for 40+</b>. Dr. Ankita provides personalised estimates during your consultation.',
    },
    {
        question: 'How much does test tube baby treatment cost in Kolkata?',
        answer: 'Test tube baby (IVF) costs in Kolkata are <b>significantly more affordable than in metros like Mumbai or Delhi</b>. The cost depends on the protocol, medications, and additional procedures needed. Maatritva IVF provides a complete written estimate upfront.',
    },
    {
        question: 'Is the test tube baby procedure painful?',
        answer: 'No. <b>Hormone injections are subcutaneous and well-tolerated, egg retrieval is done under mild sedation (painless), and embryo transfer takes 5-10 minutes with no anaesthesia needed</b>. Most women continue normal activities throughout.',
    },
    {
        question: 'At what age can you do test tube baby treatment?',
        answer: 'IVF can be done at any reproductive age. <b>Best results are for women under 35. Women 35-40 have good chances with the right protocol. After 42-43, donor eggs may be recommended</b> for optimal success rates.',
    },
    {
        question: 'What is the difference between IVF and ICSI?',
        answer: 'In standard IVF, <b>eggs and sperm are placed together to fertilise naturally</b>. In ICSI, <b>a single sperm is directly injected into each egg</b> — recommended for male factor infertility or previous fertilisation failure. At Maatritva, we predominantly use ICSI for the best results.',
    },
    {
        question: 'Can male infertility be treated with test tube baby?',
        answer: 'Yes. <b>ICSI combined with surgical sperm retrieval (TESA/PESA) allows fatherhood even for men with azoospermia</b> (no sperm in ejaculate). Male factor infertility is one of the most common reasons couples seek test tube baby treatment.',
    },
];

export default function TestTubeBabyCentrePage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Test Tube Baby Centre Kolkata', url: '/test-tube-baby-centre-kolkata' },
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
                            <Baby className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Leading Test Tube Baby Centre</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Best Test Tube Baby Centre in Kolkata — Maatritva IVF
                        </h1>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            Advanced IVF and ICSI treatment with high success rates. State-of-the-art laboratory with
                            time-lapse embryo monitoring. Personalised care by Dr. Ankita Mandal.
                        </p>
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

            {/* Direct Answer Block */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What Is Test Tube Baby Treatment?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            <strong>&ldquo;Test tube baby&rdquo;</strong> is the popular term for In Vitro Fertilisation (IVF) — a
                            fertility treatment where eggs are retrieved from the ovaries, fertilised with sperm in a laboratory,
                            and the resulting embryo is placed in the uterus to achieve pregnancy. Despite the name, no test tubes
                            are actually used — fertilisation occurs in specialised culture dishes under controlled conditions.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">How Does the Test Tube Baby Process Work?</h3>
                    <div className="space-y-4">
                        {[
                            { step: '1', title: 'Consultation & Testing', desc: 'Both partners are evaluated. Blood tests, ultrasound, and semen analysis identify the cause of infertility and inform the treatment plan.' },
                            { step: '2', title: 'Ovarian Stimulation', desc: 'Daily hormone injections for 10-12 days stimulate the ovaries to produce multiple eggs. Growth is monitored with regular ultrasound scans.' },
                            { step: '3', title: 'Egg Retrieval', desc: 'Mature eggs are collected through a short, painless procedure under mild sedation. It takes just 15-20 minutes.' },
                            { step: '4', title: 'Fertilisation (ICSI)', desc: 'Each egg is fertilised by injecting a single healthy sperm directly into it (ICSI). Embryos develop for 3-5 days in our time-lapse incubator.' },
                            { step: '5', title: 'Embryo Transfer', desc: 'The best embryo is gently placed into the uterus — a painless 5-minute procedure. Extra good embryos are frozen for future use.' },
                            { step: '6', title: 'Pregnancy Test', desc: 'A blood test 14 days after transfer confirms pregnancy. If positive, regular monitoring begins for a healthy pregnancy.' },
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

            {/* Is Test Tube Baby Normal? */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Is a Test Tube Baby Normal?
                    </h2>
                    <div className="bg-cream rounded-2xl p-6 lg:p-8 border border-gray-100 mb-8">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            <strong>Yes, absolutely.</strong> An IVF baby is completely normal in every way. The only difference is
                            how conception occurs — in a laboratory instead of inside the body. Once the embryo implants in the uterus,
                            the pregnancy, fetal development, delivery, and the child&apos;s growth are identical to natural conception.
                            Since the birth of Louise Brown (the world&apos;s first IVF baby) in 1978, over <strong>12 million IVF
                                babies</strong> have been born worldwide.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Who Needs Test Tube Baby Treatment?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            'Couples who have failed to conceive after trying for 1+ years',
                            'Women with blocked or damaged fallopian tubes',
                            'Women with advanced endometriosis',
                            'Couples with severe male factor infertility',
                            'Women with diminished ovarian reserve / low AMH',
                            'Unexplained infertility (when all tests are normal)',
                            'Couples who have failed IUI treatment',
                            'Women needing donor egg or embryo programmes',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Maatritva */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8">
                        Why Choose Maatritva IVF for Test Tube Baby Treatment?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Award className="w-6 h-6 text-gold" />, title: 'Dr. Ankita Mandal\'s Expertise', desc: '15+ years of IVF experience, advanced training from Germany, and thousands of successful cycles. She personally oversees every case.' },
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'Modern Laboratory', desc: 'HEPA-filtered clean room, time-lapse monitoring, dedicated ICSI workstations, and vitrification technology for the best embryo outcomes.' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Transparent & Affordable', desc: 'Complete written cost estimates before treatment. No hidden charges. Competitive pricing compared to other premium IVF centres.' },
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Compassionate Care', desc: 'Dedicated fertility counsellors, emotional support, and a patient-first philosophy. We treat you as family, not a file number.' },
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

            {/* Testimonials */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">Happy Test Tube Baby Parents</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { text: 'We were scared of test tube baby treatment, but Dr. Ankita explained everything so clearly. The process was much simpler than we imagined. Our baby girl is now 6 months old!', name: 'Sneha & Amit', area: 'Howrah' },
                            { text: 'After 5 years of trying and multiple treatments elsewhere, Maatritva IVF gave us hope. Dr. Ankita\'s personalised approach made all the difference. Successful on the second cycle.', name: 'Rupali & Mithun', area: 'Barasat' },
                        ].map((item) => (
                            <div key={item.name} className="bg-cream rounded-2xl p-6 border border-gray-100">
                                <div className="flex gap-1 mb-3">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-gold fill-gold" />)}</div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{item.text}&rdquo;</p>
                                <p className="font-heading font-bold text-navy text-sm">{item.name}</p>
                                <p className="text-xs text-gray-500">{item.area}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-12 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-heading text-xl font-bold text-navy mb-4 text-center">Related Treatments</h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: 'IVF Treatment', href: '/services/ivf-treatment' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment' },
                            { label: 'Blastocyst Transfer', href: '/services/blastocyst-transfer' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment' },
                            { label: 'IVF Cost', href: '/ivf-cost-kolkata' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors">
                                {item.label} <ArrowRight className="w-3 h-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Frequently Asked Questions — Test Tube Baby Centre Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Start Your Test Tube Baby Journey</h2>
                    <p className="text-white/90 mb-8 text-lg">Expert care, transparent pricing, and a team that truly cares about your success.</p>
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
