import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("getting coins ...");
    const res = await axios.get(
      `${process.env.BASE_URL}/coins/markets?vs_currency=usd`,
      {
        headers: {
          "x-cg-demo-api-key": process.env.API_KEY,
        },
      },
    );
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
