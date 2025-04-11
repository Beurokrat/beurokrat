import { NextResponse } from "next/server";
import Works from "@/models/works";
import verifyToken from "../../../validations/verifytoken";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyToken(req);
        if (!isAuthorized) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Work ID is required" }, { status: 400 });
    }

    const work = await Works.findByPk(id);
    if (!work) {
      return NextResponse.json({ error: "Work not found" }, { status: 404 });
    }

    await work.destroy();
    return NextResponse.json({ message: "Work deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/works/:id Error:", error);
    return NextResponse.json({ error: "Failed to delete work" }, { status: 500 });
  }
}
