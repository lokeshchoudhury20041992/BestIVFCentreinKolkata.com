import { Metadata } from 'next';
import { generatePageMetadata, getBreadcrumbSchema } from '@/lib/schema-helpers';
import SchemaMarkup from '@/components/SchemaMarkup';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: 'Fertility & IVF Blog — Expert Articles by Dr. Ankita Mandal',
    description: 'Read expert articles on IVF, fertility, PCOS, male infertility, and more by Dr. Ankita Mandal at Maatritva IVF, Kolkata. Evidence-based, patient-friendly information.',
    path: '/blog',
    keywords: ['IVF blog', 'fertility blog', 'PCOS information', 'IVF success tips', 'fertility articles Kolkata'],
});

export default function BlogListingPage() {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
    ]);

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-navy to-navy-light py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                        Fertility & IVF Blog
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Evidence-based articles on fertility, IVF, reproductive health, and more —
                        written by Dr. Ankita Mandal and the Maatritva IVF team.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="p-6 lg:p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-rose-pale/30 text-rose-deep text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-400">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-rose-deep transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                        {post.heroSubtext}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                            <span className="mx-1">·</span>
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-rose-deep transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
