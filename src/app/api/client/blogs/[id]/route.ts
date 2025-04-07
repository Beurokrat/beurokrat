import { NextResponse } from "next/server";
import Blog from '@/models/blog'; // Adjust the import path based on your project structure

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const blog = await Blog.findByPk(id);

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}