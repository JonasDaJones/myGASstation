import { NextResponse } from "next/server";
import connectMongo from "@/utils/db@";

export const GET = async (request) => {
  try {
    await connectMongo();
    const fxpedals = await Pedal.find();
    return new NextResponse(JSON.stringify(fxpedals), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};
