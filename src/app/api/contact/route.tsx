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

    const response = {
      success: true,
      message: "Form submitted successfully",
    };

    console.log("Positive Response:", response);

    return NextResponse.json(response);
  } catch (error) {
    const response = {
      success: false,
      message: "Server Error",
    };

    console.log("Negative Response:", response);

    return NextResponse.json(response, { status: 500 });
  }
}
