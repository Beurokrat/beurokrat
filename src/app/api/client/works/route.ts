import { NextResponse } from "next/server";
import Works from "../../../../models/works";

export async function GET(req: Request) {
    try {

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);
        const offset = (page - 1) * limit;

        const { rows: works, count } = await Works.findAndCountAll({
            limit,
            offset,
            order: [["id", "DESC"]],
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
