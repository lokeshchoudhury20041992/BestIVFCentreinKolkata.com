import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getConditionBySlug, getAllConditionSlugs } from '@/lib/conditions-data';
import {
    generatePageMetadata,
    getFAQSchema,
    getMedicalConditionSchema,
    getBreadcrumbSchema,
    SITE_URL,
} from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';
import { AlertCircle, Search, ArrowRight, Stethoscope, Heart } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    return getAllConditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const condition = getConditionBySlug(slug);
    if (!condition) return {};
    return generatePageMetadata({
        title: condition.metaTitle,
        description: condition.metaDescription,
        path: `/conditions/${condition.slug}`,
        keywords: condition.keywords,
    });
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const condition = getConditionBySlug(slug);
    if (!condition) notFound();

    const conditionSchema = getMedicalConditionSchema({
        name: condition.title.split('—')[0].trim(),
        description: condition.whatIsIt,
        url: `${SITE_URL}/conditions/${condition.slug}`,
        symptoms: condition.symptoms,
        possibleTreatments: condition.treatmentOptions.map((t) => t.name),
        diagnosisMethods: condition.diagnosis.map((d) => d.method),
    });

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Conditions', url: `${SITE_URL}/conditions` },
        { name: condition.metaTitle, url: `${SITE_URL}/conditions/${condition.slug}` },
    ]);

    return (
        <>
            <SchemaMarkup schema={conditionSchema} />
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(condition.faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-rose-deep to-navy py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <Heart className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/90 font-medium">Condition Guide</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        {condition.heroHeadline}
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                        {condition.heroSubtext}
                    </p>
                </div>
            </section>

            {/* What Is It */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6">
                        Understanding {condition.title.split('—')[0].trim()}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">{condition.whatIsIt}</p>

                    {/* Symptoms */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-6 h-6 text-rose-deep" />
                            <h3 className="font-heading text-xl font-bold text-navy">Symptoms to Watch For</h3>
                        </div>
                        <ul className="space-y-3">
                            {condition.symptoms.map((symptom) => (
                                <li key={symptom} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-rose-deep shrink-0 mt-2" />
                                    <span className="text-gray-700">{symptom}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Diagnosis */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <Search className="w-6 h-6 text-navy" />
                            <h3 className="font-heading text-xl font-bold text-navy">Diagnosis Methods</h3>
                        </div>
                        <div className="space-y-4">
                            {condition.diagnosis.map((diag) => (
                                <div key={diag.method} className="bg-white rounded-2xl border border-gray-100 p-6">
                                    <h4 className="font-heading font-bold text-navy mb-2">{diag.method}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">{diag.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Stethoscope className="w-6 h-6 text-rose-deep" />
                        <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy">Treatment Options</h2>
                    </div>

                    <div className="space-y-6 mb-10">
                        {condition.treatmentOptions.map((option) => (
                            <div key={option.name} className="bg-gradient-to-r from-cream to-white rounded-2xl border border-gray-100 p-6 lg:p-8">
                                <h3 className="font-heading text-lg font-bold text-navy mb-2">{option.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-3">{option.description}</p>
                                {option.link && (
                                    <Link
                                        href={option.link}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-rose-deep hover:underline"
                                    >
                                        Learn About {option.name} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Dr. Ankita's Approach */}
                    <div className="bg-navy rounded-2xl p-6 lg:p-8 text-white">
                        <h3 className="font-heading text-xl font-bold mb-3">Dr. Ankita&apos;s Approach</h3>
                        <p className="text-white/80 leading-relaxed">{condition.drAnkitaApproach}</p>
                    </div>

                    {/* Related Services */}
                    {condition.relatedServices.length > 0 && (
                        <div className="mt-8">
                            <h3 className="font-heading text-lg font-bold text-navy mb-4">Related Treatments</h3>
                            <div className="flex flex-wrap gap-3">
                                {condition.relatedServices.map((svc) => (
                                    <Link
                                        key={svc.slug}
                                        href={`/services/${svc.slug}`}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-pale/50 border border-rose-pale rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors"
                                    >
                                        {svc.label} <ArrowRight className="w-3 h-3" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={condition.faqs} />
        </>
    );
}
