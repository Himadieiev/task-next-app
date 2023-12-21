import { NextResponse } from "next/server";

import Task from "../../../(models)/Task";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Task.findByIdAndDelete(id);

    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
