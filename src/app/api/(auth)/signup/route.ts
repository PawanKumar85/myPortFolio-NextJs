import connectDB from "@/config/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import validator from "email-validator";

connectDB();
export const GET = async (req: NextRequest) => {
  try {
    const users = await User.find({});
    return NextResponse.json(
      {
        status: 200,
        users,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 500,
        message: "Server Error",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password, confirmPassword } = reqBody;

    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        {
          status: 400,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    if (!validator.validate(email)) {
      return NextResponse.json(
        {
          status: 400,
          message: "Invalid email format",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          status: 400,
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          status: 400,
          message: "Passwords do not match",
        },
        {
          status: 400,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return NextResponse.json(
      {
        status: 201,
        message: "User created successfully",
        data: newUser,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 500,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
