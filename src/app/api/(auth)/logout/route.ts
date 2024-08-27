import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = NextResponse.json(
      {
        message: "Logout successfully",
        success: true,
      },
      {
        status: 200,
      }
    );

    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return res;
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
