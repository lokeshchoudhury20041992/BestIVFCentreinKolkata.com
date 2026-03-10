import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata } from '@/lib/schema-helpers';
import { IndianRupee, CheckCircle, ArrowRight, Info, Calculator } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'IVF Cost in Kolkata — Transparent Pricing',
    description: 'Transparent IVF pricing at Maatritva IVF. No hidden costs. Standard and advanced IVF packages by Dr. Ankita Mandal in Kolkata.',
    path: '/ivf-cost-kolkata',
    keywords: ['IVF cost Kolkata', 'IVF price Kolkata', 'affordable IVF Kolkata', 'IVF package cost'],
});

const costFaqs = [
    {
        question: 'Why does IVF cost vary so much between clinics?',
        answer:
            'IVF costs depend on <b>lab quality, doctor experience, and techniques used</b>. Centres using advanced methods like ICSI, blastocyst culture, and time-lapse monitoring invest more in technology. Cheaper options may cut corners that affect success rates.',
    },
    {
        question: 'Are there any hidden charges I should watch out for?',
        answer:
            'At Maatritva IVF, we provide a <b>complete written cost breakdown before you start</b>. We list medication costs, lab charges, and procedure fees separately. There are no surprise bills — transparency is a core value.',
    },
    {
        question: 'Does insurance cover IVF in India?',
        answer:
            'Currently, <b>most Indian insurance policies do not cover IVF</b>. However, some policies cover diagnostic tests and surgeries like laparoscopy. We recommend checking with your provider. We also offer flexible payment options.',
    },
    {
        question: 'What if I need multiple IVF cycles? Is there a package?',
        answer:
            'We offer <b>multi-cycle packages at reduced rates</b> for patients who may need more than one attempt. Dr. Ankita discusses cumulative success rates and realistic cycle expectations during your initial consultation.',
    },
];

export default function IVFCostPage() {
    return (
        <>
            <SchemaMarkup schema={getFAQSchema(costFaqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <IndianRupee className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/90 font-medium">Transparent Pricing</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Transparent IVF Pricing in Kolkata — No Hidden Costs
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        We believe you deserve complete clarity about treatment costs before making any decisions.
                        Here is a straightforward breakdown of our IVF packages.
                    </p>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Standard Package */}
                        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                            <div className="bg-navy p-6 text-center">
                                <p className="text-sm text-white/70 font-medium uppercase tracking-wide mb-1">Standard</p>
                                <h2 className="font-heading text-2xl font-bold text-white">Basic IVF Cycle</h2>
                            </div>
                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                    <p className="font-heading text-4xl font-bold text-navy">₹ Consult</p>
                                    <p className="text-xs text-gray-400 mt-1">Final cost varies per individual case</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Ovarian stimulation & monitoring',
                                        'Egg retrieval under anaesthesia',
                                        'Standard IVF fertilisation',
                                        'Embryo transfer',
                                        'Post-transfer follow-up',
                                        'Pregnancy blood test (beta-hCG)',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="#book"
                                    className="block text-center py-3 border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
                                >
                                    Get Custom Estimate
                                </Link>
                            </div>
                        </div>

                        {/* Advanced Package */}
                        <div className="bg-white rounded-3xl border-2 border-rose-deep overflow-hidden shadow-lg relative">
                            <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                                Most Chosen
                            </div>
                            <div className="bg-gradient-to-r from-rose-deep to-rose-light p-6 text-center">
                                <p className="text-sm text-white/80 font-medium uppercase tracking-wide mb-1">Advanced</p>
                                <h2 className="font-heading text-2xl font-bold text-white">IVF + ICSI Package</h2>
                            </div>
                            <div className="p-8">
                                <div className="text-center mb-6">
                                    <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                    <p className="font-heading text-4xl font-bold text-rose-deep">₹ Consult</p>
                                    <p className="text-xs text-gray-400 mt-1">Includes all advanced techniques</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Everything in Standard IVF',
                                        'ICSI — single sperm injection per egg',
                                        'Blastocyst culture (Day 5 transfer)',
                                        'Time-lapse embryo monitoring',
                                        'Laser Assisted Hatching (if needed)',
                                        'Embryo freezing (first year included)',
                                        'Dedicated embryologist supervision',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-rose-deep shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="#book"
                                    className="block text-center py-3 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                                >
                                    Get Custom Estimate
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cost Factors */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Info className="w-6 h-6 text-navy" />
                            <h2 className="font-heading text-2xl font-bold text-navy">Why IVF Costs Vary</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'ICSI (Intracytoplasmic Sperm Injection)',
                                    desc: 'Required when sperm quality is low. Each egg is individually injected, adding specialised lab time.',
                                },
                                {
                                    title: 'Laser-Assisted Hatching',
                                    desc: 'Helps the embryo implant by thinning the outer shell. Recommended for older patients or frozen embryo transfers.',
                                },
                                {
                                    title: 'Blastocyst Culture',
                                    desc: 'Growing embryos to Day 5 costs more but allows better embryo selection and higher implantation rates.',
                                },
                                {
                                    title: 'Medications',
                                    desc: 'Stimulation drugs vary based on your ovarian reserve. Low AMH patients may need different, sometimes costlier, protocols.',
                                },
                                {
                                    title: 'Frozen Embryo Transfer (FET)',
                                    desc: 'If embryos are frozen for a future cycle, the FET procedure has additional costs for storage and the transfer itself.',
                                },
                                {
                                    title: 'Pre-implantation Testing (PGT)',
                                    desc: 'Genetic testing of embryos before transfer. Optional but recommended for patients with recurrent failures or advanced age.',
                                },
                            ].map((item) => (
                                <div key={item.title} className="border-l-2 border-rose-pale pl-4">
                                    <h3 className="font-heading font-semibold text-navy mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/calculator"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors shadow-md"
                        >
                            <Calculator className="w-4 h-4" />
                            Try Our Fertility Score Calculator
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={costFaqs} title="Common Questions About IVF Costs" />
        </>
    );
}
