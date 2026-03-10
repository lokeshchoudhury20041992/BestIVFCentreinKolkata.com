import { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import { Award, CheckCircle, ArrowRight, Microscope, Heart, ShieldCheck, Building2, Clock, Phone, MessageCircle, Star, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Best IVF Centre in Kolkata — Maatritva IVF by Dr. Ankita Mandal',
    description: 'Maatritva IVF is the best IVF centre in Kolkata with a state-of-the-art laboratory, time-lapse embryo monitoring, and high success rates. Led by Dr. Ankita Mandal. Visit New Town, Kolkata.',
    path: '/ivf-centre-in-kolkata',
    keywords: ['IVF centre in Kolkata', 'best IVF centre Kolkata', 'IVF clinic Kolkata', 'IVF hospital Kolkata', 'Maatritva IVF'],
});

const faqs = [
    {
        question: 'Which is the best IVF centre in Kolkata?',
        answer: '<b>Maatritva Fertility IVF & Healthcare</b> in New Town, Kolkata is widely regarded as one of the best IVF centres in the city. With a state-of-the-art laboratory, time-lapse embryo monitoring, and treatment led by Dr. Ankita Mandal, it offers consistently high success rates and personalised care.',
    },
    {
        question: 'What should I look for when choosing an IVF centre?',
        answer: 'Look for a centre with <b>an experienced IVF specialist, a well-equipped in-house laboratory, transparent pricing, high success rates, and positive patient reviews</b>. The quality of the embryology lab is the single most important factor affecting outcomes.',
    },
    {
        question: 'Does Maatritva IVF have its own laboratory?',
        answer: 'Yes. Maatritva IVF has a <b>dedicated, in-house IVF laboratory</b> with HEPA-filtered air, time-lapse embryo monitoring (EmbryoScope), dedicated ICSI workstations, and advanced cryopreservation (vitrification) equipment.',
    },
    {
        question: 'What is time-lapse embryo monitoring?',
        answer: '<b>Time-lapse monitoring</b> is a technology that takes images of developing embryos every few minutes, allowing embryologists to assess development without removing them from the incubator. This improves embryo selection and increases success rates.',
    },
    {
        question: 'Where is Maatritva IVF located?',
        answer: 'Maatritva IVF is located in <b>New Town, Rajarhat, Kolkata — 700156</b>. It is just 15 minutes from Kolkata Airport and easily accessible from Salt Lake, EM Bypass, and all major areas of the city.',
    },
    {
        question: 'Does Maatritva IVF treat patients from Bangladesh?',
        answer: 'Yes. Maatritva IVF provides <b>dedicated support for Bangladesh patients</b> including medical visa assistance, airport pickup, accommodation guidance, and Bengali-speaking staff. Kolkata is the nearest Indian metro for Bangladeshi patients seeking affordable, world-class IVF.',
    },
    {
        question: 'What treatments are available at Maatritva IVF?',
        answer: 'Maatritva IVF offers <b>IVF, ICSI, IUI, egg freezing, embryo freezing, donor egg IVF, male infertility treatment (TESA/PESA), PGD/PGS genetic testing, laparoscopic surgery, and hysteroscopy</b>. All treatments are performed under the supervision of Dr. Ankita Mandal.',
    },
    {
        question: 'What is the IVF success rate at Maatritva IVF?',
        answer: 'Clinical pregnancy rates at Maatritva IVF are <b>45-55% for women under 35, 35-45% for ages 35-40, and 20-30% for 40+</b>. Rates depend on age, diagnosis, and embryo quality. Dr. Ankita provides individualised estimates during consultation.',
    },
    {
        question: 'Is Maatritva IVF affordable?',
        answer: 'Yes. Maatritva IVF offers <b>competitive, transparent pricing</b> with no hidden costs. Treatment costs are documented in a complete written estimate before starting. Multi-cycle packages at reduced rates may be available.',
    },
    {
        question: 'Can I visit the lab before starting treatment?',
        answer: 'Yes. We encourage prospective patients to <b>visit the clinic and laboratory</b> before committing to treatment. Seeing the lab quality and meeting the team helps build confidence in your treatment choice.',
    },
];

export default function IVFCentrePage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'IVF Centre in Kolkata', url: '/ivf-centre-in-kolkata' },
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
                            <Building2 className="w-4 h-4 text-gold" />
                            <span className="text-sm text-white/90 font-medium">Premier IVF Centre in Kolkata</span>
                        </div>
                        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                            Best IVF Centre in Kolkata — Maatritva IVF by Dr. Ankita Mandal
                        </h1>
                        <p className="text-white/80 text-lg mb-8 leading-relaxed">
                            State-of-the-art laboratory. Time-lapse embryo monitoring. Personalised treatment by Kolkata&apos;s
                            most trusted IVF specialist. Transparent pricing. Consistently high success rates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#book" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book a Visit <ArrowRight className="w-4 h-4" />
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
                        What Makes a Good IVF Centre?
                    </h2>
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm mb-8">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            A good IVF centre combines an <strong>experienced reproductive medicine specialist, a high-quality in-house
                                embryology laboratory, modern equipment, transparent pricing, and genuine patient care</strong>. The laboratory
                            quality alone accounts for up to 30% of the difference in success rates between centres.
                        </p>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Key Factors When Choosing an IVF Centre</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Microscope className="w-6 h-6 text-navy" />, title: 'Laboratory Quality', desc: 'HEPA filtration, temperature control, time-lapse monitoring, and experienced embryologists. The lab is where fertilisation, culture, and selection happen — its quality directly impacts your results.' },
                            { icon: <Award className="w-6 h-6 text-gold" />, title: 'Doctor Experience', desc: 'Look for a specialist with dedicated reproductive medicine training, thousands of completed cycles, and expertise in complex cases like recurrent failure and low AMH.' },
                            { icon: <ShieldCheck className="w-6 h-6 text-sage" />, title: 'Cost Transparency', desc: 'A trustworthy centre provides a complete written estimate upfront — medication, procedures, and any additional costs clearly listed. No surprises.' },
                            { icon: <Heart className="w-6 h-6 text-rose-deep" />, title: 'Patient Support', desc: 'Fertility treatment is emotionally demanding. Look for centres that offer dedicated counselling, 24/7 emergency support, and compassionate, non-judgmental care.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                                <div className="mb-3">{item.icon}</div>
                                <h4 className="font-heading font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Lab */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Inside the Maatritva IVF Laboratory
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Our laboratory meets international standards for IVF care. Every piece of equipment and every process is
                        designed to maximise embryo viability and your chance of a successful pregnancy.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            'HEPA-filtered clean room with controlled air quality',
                            'Time-lapse embryo monitoring (EmbryoScope technology)',
                            'Dedicated ICSI micromanipulation workstations',
                            'Advanced vitrification for egg and embryo freezing',
                            'Continuous temperature and pH monitoring',
                            'Experienced embryologists with 7+ years average experience',
                            'Separate sperm processing laboratory',
                            'Backup power and equipment redundancy systems',
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-cream px-5 py-3 rounded-xl border border-gray-100">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                                <span className="text-sm text-navy font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services + Location */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">
                        Treatments Available at Our Centre
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {[
                            { label: 'IVF Treatment', href: '/services/ivf-treatment' },
                            { label: 'ICSI Treatment', href: '/services/icsi-treatment' },
                            { label: 'IUI Treatment', href: '/services/iui-treatment' },
                            { label: 'Egg Freezing', href: '/services/egg-freezing' },
                            { label: 'Donor Egg IVF', href: '/services/donor-egg-ivf' },
                            { label: 'Male Infertility', href: '/services/male-infertility-treatment' },
                            { label: 'TESA / PESA', href: '/services/testicular-sperm-extraction' },
                            { label: 'PGD / PGS', href: '/services/ivf-with-pgd-pgs' },
                            { label: 'Laparoscopy', href: '/services/laparoscopic-surgery' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-gray-100 hover:border-rose-pale hover:shadow-sm transition-all group">
                                <CheckCircle className="w-4 h-4 text-sage shrink-0" />
                                <span className="text-sm font-medium text-navy group-hover:text-rose-deep transition-colors">{item.label}</span>
                                <ArrowRight className="w-3 h-3 text-gray-300 ml-auto group-hover:text-rose-deep transition-colors" />
                            </Link>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                        <MapPin className="w-8 h-8 text-rose-deep mx-auto mb-3" />
                        <h3 className="font-heading text-lg font-bold text-navy mb-2">Find Us</h3>
                        <p className="text-gray-600 text-sm mb-1">Maatritva Fertility IVF & Healthcare</p>
                        <p className="text-gray-600 text-sm mb-4">New Town, Rajarhat, Kolkata — 700156</p>
                        <p className="text-xs text-gray-500">15 minutes from Kolkata Airport · Easy access from Salt Lake, EM Bypass, Howrah</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 text-center">Patient Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { text: 'The lab quality at Maatritva is visibly different from other centres we visited. The time-lapse monitoring gave us so much confidence. Successful on first attempt.', name: 'Moumita & Bikash', area: 'New Town' },
                            { text: 'Dr. Ankita explained every step patiently. No pushy upselling, no hidden costs. The centre feels modern and clean. Best IVF centre we could have chosen.', name: 'Sunita & Ravi', area: 'Salt Lake' },
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

            <FAQSection faqs={faqs} title="Frequently Asked Questions — IVF Centre in Kolkata" />

            {/* CTA */}
            <section className="py-16 lg:py-20 bg-gradient-to-r from-rose-deep to-rose-light" id="book">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Visit Maatritva IVF</h2>
                    <p className="text-white/90 mb-8 text-lg">See our lab, meet Dr. Ankita, and start your fertility journey with confidence.</p>
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
