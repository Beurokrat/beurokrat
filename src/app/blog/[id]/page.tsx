'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
}

const BlogPostPage = () => {
    const { id } = useParams(); // Use useParams to get the dynamic route parameter
    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        if (id) {
            // Fetch blog post details using the id
            fetch(`/api/client/blogs/${id}`)
                .then((response) => response.json())
                .then((data) => setBlogPost(data))
                .catch((error) => console.error('Error fetching blog post:', error));
        }
    }, [id]);

    if (!blogPost) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{blogPost.title}</h1>
            <p><strong>Author:</strong> {blogPost.author}</p>
            <p><strong>Date:</strong> {new Date(blogPost.date).toLocaleDateString()}</p>
            <div>{blogPost.content}</div>
        </div>
    );
};

export default BlogPostPage;