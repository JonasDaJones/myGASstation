import connectMongoDB from "@/utils/db@";
import Pedal from "@models/pedalModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newPedalName: pedalName,
    newManufacturer: manufacturer,
    newSeries: series,
    newMadeIn: madeIn,
    newCategory: category,
    newAdditionalcategory: additionalcategory,
    newJacksMountedOn: jacksMountedOn,
    newBypass: bypass,
    newBattery: battery,
    newVoltage: voltage,
    newPolarity: polarity,
    newCircuit: circuit,
    newWidth: width,
    newHeight: height,
    newDepth: depth,
    newWeight: weight,
    newBasedOnFamousModel: basedOnFamousModel,
    newSpecialFeatures: specialFeatures,
  } = await request.json();
  await connectMongoDB();
  await Pedal.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "Pedal updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const pedal = await Pedal.findOne({ _id: id });
  return NextResponse.json({ pedal }, { status: 200 });
}
