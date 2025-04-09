import { NextResponse } from "next/server";
import  Careers  from '../../../../models/careers';

// ✅ 1. GET API - List all job postings  
export async function GET(req: Request) {  
   
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



