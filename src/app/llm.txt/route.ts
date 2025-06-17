import Blogs from "@/models/blog"
import Works from "@/models/works"
import Careers from "@/models/careers"
import { NextResponse } from "next/server"

const slugify = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphen
        .replace(/(^-|-$)+/g, "") // remove leading/trailing hyphens

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.beurokrat.com"

    let llmContent = `# LLM.txt for ${baseUrl}

# About this site
This is the official website for Beurokrat, containing information about our company, services, work portfolio, blog posts, and career opportunities.

# Main sections

## Company
${baseUrl}/company
Information about Beurokrat, our mission, values, and team.

## Services & Work
${baseUrl}/work
Portfolio showcasing our projects and case studies.

## Blog
${baseUrl}/blog
Articles, insights, and updates from our team.

## Careers
${baseUrl}/careers
Current job openings and career opportunities.

## Contact
${baseUrl}/contact
Get in touch with our team.

# Dynamic content

## Blog Posts
`

    // Add blog entries
    try {
        const blogs = await Blogs.findAll() as any[]
        for (const post of blogs) {
            llmContent += `${baseUrl}/blog/${post.id}-${slugify(post.title)}\n`
        }
    } catch (error) {
        console.error("Failed to fetch blog posts for llm.txt:", error)
        llmContent += `# Blog posts available at ${baseUrl}/blog/[id]\n`
    }

    // llmContent += `\n## Work Projects\n`

    // // Add work entries
    // try {
    //     const works = await Works.findAll() as any[]
    //     for (const work of works) {
    //         llmContent += `${baseUrl}/work/${slugify(work.title)}\n`
    //     }
    // } catch (error) {
    //     console.error("Failed to fetch work items for llm.txt:", error)
    //     llmContent += `# Work projects available at ${baseUrl}/work/[id]\n`
    // }

    // llmContent += `\n## Career Opportunities\n`

    // // Add career entries
    // try {
    //     const careers = await Careers.findAll() as any[]
    //     for (const career of careers) {
    //         llmContent += `${baseUrl}/careers/${slugify(career.title)}\n`
    //     }
    // } catch (error) {
    //     console.error("Failed to fetch careers for llm.txt:", error)
    //     llmContent += `# Career opportunities available at ${baseUrl}/careers/[id]\n`
    // }

    llmContent += `
# Additional information
- Site updated regularly with new blog posts and project updates
- All content is publicly accessible unless otherwise noted
- For questions about this site or its content, visit ${baseUrl}/contact

# Crawling guidelines
- Please respect our server resources
- Content is updated weekly for static pages, monthly for dynamic content
- Priority: Home page (1.0), Main sections (0.8), Work projects (0.7), Careers (0.7), Blog posts (0.6)
`

    return new NextResponse(llmContent, {
        headers: {
            "Content-Type": "text/plain",
        },
    })
}
