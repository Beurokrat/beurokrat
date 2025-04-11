import { NextResponse } from "next/server";
import Job from "@/models/careers";
import verifyToken from "../../../validations/verifytoken";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyToken(req);
    if (!isAuthorized) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
    }

    // Check if the job exists
    const job = await Job.findByPk(id);
    if (!job) {
      console.log(`Job with ID ${id} not found.`);
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Delete the job
    await job.destroy();

    return NextResponse.json({ message: "Job deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/jobs/:id Error:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}
