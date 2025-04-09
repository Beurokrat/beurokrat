import { NextResponse } from "next/server";
import Works from "@/models/works";
import verifyToken from "../../validations/verifytoken";

export async function GET(req: Request) {
    try {
        // Apply middleware
        const isAuthorized = await verifyToken(req);
        if (!isAuthorized) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);
        const offset = (page - 1) * limit;

        const { rows: works, count } = await Works.findAndCountAll({
            limit,
            offset,
            order: [["created_at", "DESC"]],
        });

        return NextResponse.json({
            data: works,
            total: count,
            page,
            totalPages: Math.ceil(count / limit),
        });
    } catch (error) {
        console.error("GET /api/works Error:", error);
        return NextResponse.json({ error: "Failed to fetch works" }, { status: 500 });
    }
}


export async function POST(req: Request) {
    const isAuthorized = await verifyToken(req);
    if (!isAuthorized) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const { title, image, description, tag, link } = await req.json();

        if (!title || !image || !description || !tag) {
            return NextResponse.json({ error: "All fields except link are required" }, { status: 400 });
        }

        const newWork = await Works.create({ title, image, description, tag, link });
        return NextResponse.json(newWork, { status: 201 });
    } catch (error) {
        console.error("POST /api/works Error:", error);
        return NextResponse.json({ error: "Failed to create work" }, { status: 500 });
    }
}