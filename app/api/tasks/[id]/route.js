import { NextResponse } from "next/server";

import Task from "../../../(models)/Task";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTask = await Task.findOne({ _id: id });

    return NextResponse.json({ foundTask }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Task.findByIdAndDelete(id);

    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const taskData = body.formData;

    const updateTaskData = await Task.findByIdAndUpdate(id, { ...taskData });

    return NextResponse.json({ message: "Task updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
