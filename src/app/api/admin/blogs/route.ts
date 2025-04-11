import { NextResponse } from "next/server";
import Blog from '@/models/blog';
import verifyToken from "../../validations/verifytoken";

// ✅ 1. GET API - List all blogs
export async function GET(req: Request) {
  try {
    const isAuthorized = await verifyToken(req);
    if (!isAuthorized) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse URL to get query parameters
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const offset = (page - 1) * limit;

    // Fetch paginated blogs
    const { rows: blogs, count } = await Blog.findAndCountAll({
      limit,
      offset,
      order: [["created_at", "DESC"]], // Sort by newest first
    });

    return NextResponse.json({
      data: blogs,
      total: count,
      page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    console.error("GET /api/blogs Error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}


// ✅ 2. POST API - Add a new blog
export async function POST(req: Request) {
  const isAuthorized = await verifyToken(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { title, content, blogImage,category } = await req.json();
    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    const newBlog = await Blog.create({ title, content, blogImage,category });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("POST /api/blogs Error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}

