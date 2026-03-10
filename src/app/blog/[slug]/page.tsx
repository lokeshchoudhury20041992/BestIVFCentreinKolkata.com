import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog-data';
import { generatePageMetadata, getFAQSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import FAQSection from '@/components/FAQSection';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import MedicallyReviewed from '@/components/MedicallyReviewed';

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};
    return generatePageMetadata({
        title: post.metaTitle,
        description: post.metaDescription,
        path: `/blog/${post.slug}`,
        keywords: post.keywords,
    });
}

function getArticleSchema(post: NonNullable<ReturnType<typeof getBlogPostBySlug>>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription,
        author: {
            '@type': 'Person',
            name: post.author,
            url: `${SITE_URL}/doctors/dr-ankita-mandal`,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Maatritva Fertility IVF & Healthcare',
            url: SITE_URL,
        },
        datePublished: post.publishedDate,
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        keywords: post.keywords.join(', '),
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
    ]);

    return (
        <>
            <SchemaMarkup schema={getArticleSchema(post)} />
            <SchemaMarkup schema={breadcrumbs} />
            <SchemaMarkup schema={getFAQSchema(post.faqs)} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full border border-white/20">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/60">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                    </div>
                    <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
                        {post.heroHeadline}
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-6">
                        {post.heroSubtext}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10">
                        {post.content.map((section, index) => (
                            <div key={index}>
                                <h2 className="font-heading text-2xl font-bold text-navy mb-4">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {section.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medically Reviewed Badge */}
            <MedicallyReviewed date={post.publishedDate} />

            {/* Related Links */}
            {(post.relatedServices.length > 0 || post.relatedConditions.length > 0) && (
                <section className="py-12 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {post.relatedServices.length > 0 && (
                            <div className="mb-8">
                                <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-sage" /> Related Services
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {post.relatedServices.map((svc) => (
                                        <Link
                                            key={svc.slug}
                                            href={`/services/${svc.slug}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors"
                                        >
                                            {svc.label} <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {post.relatedConditions.length > 0 && (
                            <div>
                                <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-rose-deep" /> Related Conditions
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {post.relatedConditions.map((cond) => (
                                        <Link
                                            key={cond.slug}
                                            href={`/conditions/${cond.slug}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream border border-gray-200 rounded-full text-sm font-medium text-navy hover:border-rose-deep hover:text-rose-deep transition-colors"
                                        >
                                            {cond.label} <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* FAQ */}
            <FAQSection faqs={post.faqs} />

            {/* Back to Blog */}
            <section className="py-12 bg-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-colors"
                    >
                        ← Back to All Articles
                    </Link>
                </div>
            </section>
        </>
    );
}
