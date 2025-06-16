import Blogs from '@/models/blog'
import Works from '@/models/works'
import Careers from '@/models/careers'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.beurokrat.com'

    const staticRoutes = [
        '',
        '/company',
        '/careers',
        '/work',
        '/blog',
        '/contact',
    ]

    const routeEntries = staticRoutes.map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Blog entries
    let blogEntries: MetadataRoute.Sitemap = []
    try {
        const blogs = await Blogs.findAll()
        blogEntries = blogs.map((post: any) => ({
            url: `${baseUrl}/blog/${post.id}`,
            lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    } catch (error) {
        console.error('Failed to fetch blog posts:', error)
    }

    // Work entries
    let workEntries: MetadataRoute.Sitemap = []
    try {
        const works = await Works.findAll()
        workEntries = works.map((project: any) => ({
            url: `${baseUrl}/work/${project.id}`,
            lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    } catch (error) {
        console.error('Failed to fetch work items:', error)
    }

    // Career entries
    let careerEntries: MetadataRoute.Sitemap = []
    try {
        const careers = await Careers.findAll()
        careerEntries = careers.map((career: any) => ({
            url: `${baseUrl}/careers/${career.id}`,
            lastModified: career.updatedAt ? new Date(career.updatedAt) : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    } catch (error) {
        console.error('Failed to fetch careers:', error)
    }

    return [...routeEntries, ...blogEntries, ...workEntries, ...careerEntries]
}
