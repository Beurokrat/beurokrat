import Image from 'next/image';
import { AspectRatio } from '@/app/_components/shadui/aspect-ratio';
import { Metadata } from 'next';
import Blog from '@/models/blog';
import { json } from 'sequelize';

interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    created_at: string;
    blogImage?: string; // Optional cover image for the blog
}

interface BlogPostPageProps {
    params: { id: string };
}

const extractIdFromSlug = (slug: string) => {
    const parts = slug.split('-');
    return parts[0];
};

const slugify = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphen
        .replace(/(^-|-$)+/g, "") // remove leading/trailing hyphens

export async function generateStaticParams() {
    const blogs = await Blog.findAll();
    return blogs.map((blog: any) => ({
        id: blog.id.toString() + '-' + slugify(blog.title),
    }));
}



export async function generateMetadata({
    params: { id },
}: BlogPostPageProps): Promise<Metadata> {
    const postId = extractIdFromSlug(id);
    const response = await Blog.findByPk(postId);
    if (!response) throw new Error('Blog post not found');
    const post: BlogPost = response.get({ plain: true });

    return {
        title: post.title,
        description: post.content,
        openGraph: {
            images: [
                {
                    url: post.blogImage || '',
                    width: 1200,
                    height: 630,
                }
            ]
        }
    };
}

// Fetch blog post data on the server
async function fetchBlogPost(id: string): Promise<BlogPost | null> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/blogs/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const postId = extractIdFromSlug(params.id);
    const blogPost = await fetchBlogPost(postId);


    if (!blogPost) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg font-semibold">Blog post not found.</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 mt-20">
            {/* Blog Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-6 md:hidden">{blogPost.title}</h1>

            {/* Cover Image */}
            {blogPost.blogImage && (
                <div className="mb-8 w-[450px] sm:w-[100%] md:w-[600px] lg:w-[800px] xl:w-[1000px] mx-auto">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                        <Image
                            src={blogPost.blogImage}
                            alt={blogPost.title}
                            className="w-full object-cover rounded-lg shadow-md"
                            fill
                            loading="lazy"
                            priority={false}
                        />
                    </AspectRatio>
                </div>
            )}

            <h1 className="text-4xl font-bold text-gray-800 mb-6 md:block sm:hidden">{blogPost.title}</h1>

            {/* Author and Date */}
            <div className="flex items-center justify-between text-gray-600 text-sm mb-6">
                <div>
                    <span className="font-medium">By {blogPost.author || 'Beurokrat'}</span>
                </div>
                <div>
                    <span>
                        {new Date(blogPost.created_at).toLocaleDateString('en-US', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none text-gray-700">{blogPost.content}</div>
        </div>
    );
}