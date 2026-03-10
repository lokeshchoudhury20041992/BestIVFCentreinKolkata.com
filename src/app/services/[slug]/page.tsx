import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';
import {
    generatePageMetadata,
    getMedicalProcedureSchema,
    getFAQSchema,
    getBreadcrumbSchema,
    SITE_URL,
} from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';
import { CheckCircle, ArrowRight, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};
    return generatePageMetadata({
        title: service.metaTitle,
        description: service.metaDescription,
        path: `/services/${service.slug}`,
        keywords: service.keywords,
    });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    const procedureSchema = getMedicalProcedureSchema({
        name: service.title,
        description: service.overview,
        preparation: service.preparation,
        procedureType: service.procedureType,
        followup: service.followup,
        url: `${SITE_URL}/services/${service.slug}`,
    });

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Treatments', url: `${SITE_URL}/services` },
        { name: service.metaTitle, url: `${SITE_URL}/services/${service.slug}` },
    ]);

    return (
        <>
            <SchemaMarkup schema={procedureSchema} />
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(service.faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-rose-deep py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <Stethoscope className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/90 font-medium">Treatment</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        {service.heroHeadline}
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                        {service.heroSubtext}
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        What is {service.title}?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.overview}</p>

                    <h3 className="font-heading text-xl font-bold text-navy mb-4">Who Is It For?</h3>
                    <ul className="space-y-3 mb-8">
                        {service.whoIsItFor.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Procedure Steps */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-10">
                        Step-by-Step Process
                    </h2>
                    <div className="space-y-6">
                        {service.procedureSteps.map((step) => (
                            <div key={step.step} className="flex gap-6">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-deep to-rose-light flex items-center justify-center text-white font-heading font-bold text-lg">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-heading text-lg font-bold text-navy mb-1">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Rate Note */}
            <section className="py-12 bg-rose-pale/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-rose-pale">
                        <h3 className="font-heading text-xl font-bold text-navy mb-3">About Our Success Rates</h3>
                        <p className="text-gray-700 leading-relaxed">{service.successRateNote}</p>
                    </div>
                </div>
            </section>

            {/* Related Conditions */}
            {service.relatedConditions.length > 0 && (
                <section className="py-12 bg-cream">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-heading text-xl font-bold text-navy mb-4">Related Conditions</h3>
                        <div className="flex flex-wrap gap-3">
                            {service.relatedConditions.map((cond) => (
                                <Link
                                    key={cond.slug}
                                    href={`/conditions/${cond.slug}`}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors"
                                >
                                    {cond.label} <ArrowRight className="w-3 h-3" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <FAQSection faqs={service.faqs} />
        </>
    );
}
