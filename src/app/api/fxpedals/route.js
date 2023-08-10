import { NextResponse } from "next/server";
import connectMongoDB from "@/utils/db@";

export async function POST(request) {
  const {
    pedalName,
    manufacturer,
    series,
    madeIn,
    category,
    additionalcategory,
    jacksMountedOn,
    bypass,
    battery,
    voltage,
    polarity,
    circuit,
    width,
    height,
    depth,
    weight,
    basedOnFamousModel,
    specialFeatures,
  } = await request.json();
  await connectMongoDB();
  await Pedal.create({
    pedalName,
    manufacturer,
    series,
    madeIn,
    category,
    additionalcategory,
    jacksMountedOn,
    bypass,
    battery,
    voltage,
    polarity,
    circuit,
    width,
    height,
    depth,
    weight,
    basedOnFamousModel,
    specialFeatures,
  });
  return NextResponse.json({ message: "Pedal created" }, { status: 201 });
}

export async function GET() {
  await connectMongo();
  const fxpedals = await Pedal.find();
  return NextResponse.json({ fxpedals });
}

export async function DELETE(request) {
  const id = request.next.Url.searchParams.get("id");
  await connectMongoDB();
  await Pedal.findByIdAndDelete(id);
  return NextResponse.json({ message: "Pedal deleted" }, { status: 200 });
}
