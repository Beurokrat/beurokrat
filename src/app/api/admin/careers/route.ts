import { NextResponse } from "next/server";
import  Careers  from '@/models/careers';
import verifyToken from "../../validations/verifytoken";

// ✅ 1. GET API - List all job postings  
export async function GET(req: Request) {  
    const isAuthorized = await verifyToken(req);
        if (!isAuthorized) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
  try {  
    // Parse URL to get query parameters  
    const { searchParams } = new URL(req.url);  
    const page = parseInt(searchParams.get("page") || "1", 10);  
    const limit = parseInt(searchParams.get("limit") || "10", 10);  
    const offset = (page - 1) * limit;  

    // Fetch paginated jobs  
    const { rows: jobs, count } = await Careers.findAndCountAll({  
      limit,  
      offset,  
      order: [["created_at", "DESC"]], // Sort by newest first  
    });  

    return NextResponse.json({  
      data: jobs,  
      total: count,  
      page,  
      totalPages: Math.ceil(count / limit),  
    });  
  } catch (error) {  
    console.error("GET /api/jobs Error:", error);  
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });  
  }  
}  

export async function POST(req: Request) {
    const isAuthorized = await verifyToken(req);
    if (!isAuthorized) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
      const { title, position, location, description, link } = await req.json();
      if (!title || !position || !location || !description || !link) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }
  
      const newCareer = await Careers.create({ title, position, location, description, link });
      return NextResponse.json(newCareer, { status: 201 });
    } catch (error) {
      console.error("POST /api/careers Error:", error);
      return NextResponse.json({ error: "Failed to create career" }, { status: 500 });
    }
  } 

