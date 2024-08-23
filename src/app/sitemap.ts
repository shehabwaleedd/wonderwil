import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.wonderwil.com';

    const staticUrls = [
        { url: `${baseUrl}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/about`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/expertise`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/wonder`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    ];

    return staticUrls;
}
