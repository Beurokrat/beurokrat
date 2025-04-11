import { NextResponse } from "next/server";
import Blog from '@/models/blog';
import verifyToken from "../../../validations/verifytoken";
import { createClient } from "@supabase/supabase-js";
import extractStoragePath from "@/utils/extract-storage-path";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are not defined.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const isAuthorized = await verifyToken(req);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }
    const { blogImageUrl } = await req.json();

    // Check if the blog exists
    const blog = await Blog.findByPk(id);
    if (!blog) {
      console.log(`Blog with ID ${id} not found.`);
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete the blog
    await blog.destroy();
    const storagePath = extractStoragePath(blogImageUrl, 'assets');
    await supabase.storage
      .from('assets')
      .remove([storagePath || ""]).then((response) => { console.log(response) });


    
    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/blogs/:id Error:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
