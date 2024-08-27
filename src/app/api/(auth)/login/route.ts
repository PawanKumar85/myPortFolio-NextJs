import connectDB from "@/config/database";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import validator from "email-validator";
import jwt from "jsonwebtoken";

connectDB();

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
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
          success: false,
          message: "Invalid email address",
        },
        {
          status: 400,
        }
      );
    }

    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }
    const match = await bcrypt.compare(password, findEmail.password);
    if (!match) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        {
          status: 401,
        }
      );
    }

    const tokenData = {
      id: findEmail.id,
      email: findEmail.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const res = NextResponse.json(
      {
        success: true,
        message: "Logged in successfully",
      },
      {
        status: 200,
      }
    );

    res.cookies.set("token", token, {
      httpOnly: true,
    });

    return res;
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
