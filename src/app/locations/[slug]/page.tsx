import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations-data';
import {
    generatePageMetadata,
    getFAQSchema,
    getBreadcrumbSchema,
    SITE_URL,
} from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';
import MapPlaceholder from '@/components/MapPlaceholder';
import { MapPin, Navigation, Star, CheckCircle, Train, Car, Bus } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
    return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);
    if (!location) return {};
    return generatePageMetadata({
        title: location.metaTitle,
        description: location.metaDescription,
        path: `/locations/${location.slug}`,
        keywords: location.keywords,
    });
}

const directionIcons: Record<string, React.ReactNode> = {
    'By Metro': <Train className="w-5 h-5 text-rose-deep" />,
    'By Car': <Car className="w-5 h-5 text-rose-deep" />,
    'By Bus': <Bus className="w-5 h-5 text-rose-deep" />,
};

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = getLocationBySlug(slug);
    if (!location) notFound();

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Locations', url: `${SITE_URL}/locations` },
        { name: location.metaTitle, url: `${SITE_URL}/locations/${location.slug}` },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(location.faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-sage py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-sm text-white/90 font-medium">Location</span>
                    </div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        {location.heroHeadline}
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                        {location.heroSubtext}
                    </p>
                </div>
            </section>

            {/* Area Info */}
            <section className="py-16 lg:py-20 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">{location.areaDescription}</p>

                    {/* Landmarks */}
                    <h2 className="font-heading text-xl font-bold text-navy mb-4">Nearby Landmarks</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-12">
                        {location.landmarks.map((landmark) => (
                            <div key={landmark} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100">
                                <Navigation className="w-4 h-4 text-rose-deep shrink-0" />
                                <span className="text-sm text-gray-700">{landmark}</span>
                            </div>
                        ))}
                    </div>

                    {/* How to Reach */}
                    <h2 className="font-heading text-xl font-bold text-navy mb-4">How to Reach Us</h2>
                    <div className="space-y-4 mb-12">
                        {location.directions.map((dir) => (
                            <div key={dir.mode} className="flex items-start gap-4 bg-white rounded-xl px-5 py-4 border border-gray-100">
                                <div className="shrink-0 mt-0.5">
                                    {directionIcons[dir.mode] || <MapPin className="w-5 h-5 text-rose-deep" />}
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">{dir.mode}</p>
                                    <p className="text-sm text-gray-600">{dir.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map */}
                    <MapPlaceholder
                        query={location.mapEmbedPlaceholder}
                        label={`Maatritva IVF — ${location.title.split('in ').pop()}`}
                    />
                </div>
            </section>

            {/* Why Visit Us */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-2xl font-bold text-navy mb-6">Why Visit Maatritva IVF</h2>
                    <div className="space-y-3 mb-12">
                        {location.whyVisitUs.map((point) => (
                            <div key={point} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                                <span className="text-gray-700">{point}</span>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-rose-pale/50 to-gold-light/20 rounded-2xl p-6 lg:p-8">
                        <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                        </div>
                        <p className="text-gray-700 italic leading-relaxed mb-4">
                            &quot;{location.testimonial.text}&quot;
                        </p>
                        <p className="font-heading font-bold text-navy">{location.testimonial.name}</p>
                        <p className="text-sm text-gray-500">{location.testimonial.area}</p>
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="#book"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-deep to-rose-light text-white font-heading font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Book Your Consultation Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection faqs={location.faqs} />
        </>
    );
}
