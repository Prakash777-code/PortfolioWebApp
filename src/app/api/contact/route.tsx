import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {
    
    const body = await req.json();

    const { name, email, message } = body;

    console.log("=====Contact Form Submission======");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("===================================");

    return NextResponse.json({
      success: true,
      message: "Form Submitted Successfully",
    });
  } catch (error) {
    return (
      NextResponse.json({
        success: false,
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }

}
