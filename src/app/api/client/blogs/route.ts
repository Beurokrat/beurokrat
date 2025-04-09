import { NextResponse } from "next/server";
import Blog from '@/models/blog';

// ✅ 1. GET API - List all blogs
export async function GET(req: Request) {
  try {
    

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



