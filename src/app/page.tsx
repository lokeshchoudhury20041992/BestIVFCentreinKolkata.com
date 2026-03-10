import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getFAQSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema-helpers';
import { Stethoscope, Baby, Microscope, Scissors, HeartPulse, ArrowRight, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best IVF Centre in Kolkata | Dr. Ankita Mandal - Maatritva IVF',
  description:
    'Dr. Ankita Mandal\'s Maatritva IVF — Kolkata\'s most trusted fertility centre. IVF, IUI, ICSI, and laparoscopic surgery with transparent pricing and high success rates.',
  alternates: { canonical: 'https://bestivfcentreinkolkata.com' },
};

const services = [
  {
    title: 'IVF Treatment',
    description: 'Advanced In Vitro Fertilisation with personalised protocols and time-lapse embryo monitoring for optimal results.',
    href: '/services/ivf-treatment',
    icon: <Baby className="w-6 h-6" />,
  },
  {
    title: 'IUI Treatment',
    description: 'A gentle, less invasive first-line fertility treatment with precise ovulation tracking for best timing.',
    href: '/services/iui-treatment',
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    title: 'ICSI Treatment',
    description: 'Precision-guided sperm injection for severe male factor infertility — maximising fertilisation rates.',
    href: '/services/icsi-treatment',
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive keyhole surgery to diagnose and treat tubal blockages, cysts, and endometriosis.',
    href: '/services/laparoscopic-surgery',
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: 'High-Risk Pregnancy',
    description: 'Expert round-the-clock management for IVF pregnancies, multiples, and complex maternal conditions.',
    href: '/services/high-risk-pregnancy',
    icon: <HeartPulse className="w-6 h-6" />,
  },
];

const homepageFaqs = [
  {
    question: 'I have been trying for over a year. When should I consult a fertility specialist?',
    answer:
      'If you are under 35 and have been trying for <b>12 months without success</b>, or over 35 and trying for 6 months, it is time to see a specialist. Earlier consultation is recommended if you have known issues like irregular periods or PCOS.',
  },
  {
    question: 'What makes Maatritva IVF different from large corporate hospitals?',
    answer:
      'At Maatritva, <b>Dr. Ankita personally oversees every case</b> — you are not just a file number. Our boutique approach means personalised protocols, direct doctor access, and a warm, private environment that makes the journey less stressful.',
  },
  {
    question: 'Is IVF the only option, or are there simpler treatments?',
    answer:
      'IVF is not always the first step. Dr. Ankita follows a <b>step-wise approach</b>: starting with ovulation induction, proceeding to IUI, and recommending IVF only when necessary. Many patients conceive with simpler treatments.',
  },
  {
    question: 'How transparent is the pricing at your centre?',
    answer:
      'Completely transparent. We provide a <b>detailed cost breakdown before you begin</b>, with no hidden charges. Visit our IVF Cost page or ask during your consultation for a personalised estimate.',
  },
];

export default function HomePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbs} />
      <SchemaMarkup schema={getFAQSchema(homepageFaqs)} />

      {/* Hero */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-pale rounded-full mb-4">
              <Stethoscope className="w-4 h-4 text-rose-deep" />
              <span className="text-sm font-medium text-rose-deep">Our Services</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-navy mb-4">
              Comprehensive Fertility Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From initial consultation to successful pregnancy — every treatment under one roof,
              guided by Dr. Ankita Mandal&apos;s expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.href} {...service} index={index} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/ivf-cost-kolkata"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors shadow-md"
            >
              View IVF Cost Breakdown
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Ankita */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/30 rounded-full mb-6">
                <Star className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">Why Maatritva IVF</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6">
                Why Families Trust Dr. Ankita Mandal
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Choosing a fertility specialist is one of the most important decisions you will make.
                Dr. Ankita combines deep medical expertise with the empathy and patience that this
                journey demands. Every patient receives her personal attention — not a junior doctor,
                not a rotating roster.
              </p>

              <div className="space-y-4">
                {[
                  'MBBS, MS (OBG), Fellowship in Reproductive Medicine',
                  '15+ years of specialised experience in infertility',
                  'Personally supervises every IVF cycle and procedure',
                  'Transparent pricing — no hidden costs, ever',
                  'Warm, private clinic — not a crowded hospital ward',
                  'Consistent, high clinical success rates across all age groups',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-rose-pale to-gold-light/30 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    &quot;After years of disappointment, Dr. Ankita gave us hope — and our beautiful
                    daughter. Her patience, honesty, and skill are unmatched. She treats you like family,
                    not just another patient.&quot;
                  </p>
                  <div>
                    <p className="font-heading font-bold text-navy">Supriya & Amit</p>
                    <p className="text-sm text-gray-500">IVF Success — Salt Lake, Kolkata</p>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-4">
                    &quot;I was told at two other clinics that IVF was my only option. Dr. Ankita
                    tried IUI first — and it worked on the second cycle. She is thorough, honest,
                    and truly cares.&quot;
                  </p>
                  <div>
                    <p className="font-heading font-bold text-navy">Riya & Soham</p>
                    <p className="text-sm text-gray-500">IUI Success — New Town, Kolkata</p>
                  </div>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-sage-light/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">NMC Compliant</p>
                  <p className="text-xs text-gray-500">All guidelines followed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condition Hubs Teaser */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4">
              Understanding Your Condition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Knowledge is the first step. Read about common fertility conditions and how
              Dr. Ankita approaches each one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'PCOS Treatment',
                desc: 'Affecting 1 in 5 women — highly treatable with the right approach.',
                href: '/conditions/pcos-treatment',
              },
              {
                title: 'Low AMH',
                desc: 'A low number does not mean zero chances. Learn about tailored IVF protocols.',
                href: '/conditions/low-amh-treatment',
              },
              {
                title: 'Blocked Fallopian Tubes',
                desc: 'Surgery or IVF? Understand your diagnosis and options clearly.',
                href: '/conditions/blocked-fallopian-tubes',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-rose-pale transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-rose-deep transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                <span className="text-sm font-semibold text-rose-deep flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homepageFaqs} />
    </>
  );
}
