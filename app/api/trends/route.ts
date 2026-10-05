import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/search/trending`, {
      headers: {
        "x-cg-demo-api-key": process.env.API_KEY,
      },
    });

    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
