import connectDB from "@/config/database";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";

connectDB();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();

    const { token } = reqBody;

    const users = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!users) {
      return NextResponse.json(
        {
          status: false,
          message: "Invalid token",
        },
        {
          status: 401,
        }
      );
    }

    users.verifyToken = undefined;
    users.verifyTokenExpiry = undefined;
    await users.save();

    return NextResponse.json(
      {
        status: true,
        message: "Email verified successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
