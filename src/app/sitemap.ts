import type { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/services-data';
import { getAllLocationSlugs } from '@/lib/locations-data';
import { getAllConditionSlugs } from '@/lib/conditions-data';
import { getAllBlogSlugs } from '@/lib/blog-data';

const BASE_URL = 'https://bestivfcentreinkolkata.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/ivf-cost-kolkata`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/calculator`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/doctors`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/privacy-policy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Money pages (keyword-targeted landing pages)
    const moneyPages: MetadataRoute.Sitemap = [
        'best-ivf-specialist-in-kolkata',
        'best-infertility-specialist-in-kolkata',
        'ivf-centre-in-kolkata',
        'fertility-clinic-kolkata',
        'best-gynecologist-in-kolkata',
        'test-tube-baby-centre-kolkata',
    ].map((slug) => ({
        url: `${BASE_URL}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // Doctor entity pages
    const doctorPages: MetadataRoute.Sitemap = [
        'dr-ankita-mandal',
        'dr-chhabi-ghosh',
    ].map((slug) => ({
        url: `${BASE_URL}/doctors/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Service pages
    const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Location pages
    const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
        url: `${BASE_URL}/locations/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Condition pages
    const conditionPages: MetadataRoute.Sitemap = getAllConditionSlugs().map((slug) => ({
        url: `${BASE_URL}/conditions/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Blog pages
    const blogPages: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/blog`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        ...getAllBlogSlugs().map((slug) => ({
            url: `${BASE_URL}/blog/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    return [...staticPages, ...moneyPages, ...doctorPages, ...servicePages, ...locationPages, ...conditionPages, ...blogPages];
}
