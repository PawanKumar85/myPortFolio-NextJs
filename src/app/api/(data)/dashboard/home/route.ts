import connectDB from "@/config/database";
import Home from "@/models/home";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { name, title, phone, email, birthday, permanent, working } = reqBody;

    if (
      !name ||
      !title ||
      !phone ||
      !email ||
      !birthday ||
      !permanent ||
      !working
    ) {
      return NextResponse.json({
        success: false,
        message: "All fields are required",
      });
    }

    const home = new Home({
      name,
      title,
      phone,
      email,
      birthday,
      permanent,
      working,
    });

    const save = await home.save();

    if (!save) {
      return NextResponse.json({
        success: false,
        message: "Failed to save data",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Data saved successfully",
      data: save,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "Server Error",
      error: error.message,
    });
  }
};
