import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log("getting details ...");

    const coinId = req.nextUrl.searchParams.get("id");
    const res = await axios.get(`${process.env.BASE_URL}/coins/${coinId}`, {
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
