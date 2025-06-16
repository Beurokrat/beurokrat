import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Base URL from environment or fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.beurokrat.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/admin/'
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}