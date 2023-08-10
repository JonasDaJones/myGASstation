import mongoose, { Schema } from "mongoose";

const pedalSchema = new Schema(
  {
    pedalName: String,
    manufacturer: String,
    series: String,
    madeIn: String,
    category: String,
    additionalcategory: String,
    jacksMountedOn: String,
    bypass: String,
    battery: Boolean,
    voltage: Number,
    polarity: String,
    circuit: String,
    width: Number,
    height: Number,
    depth: Number,
    weight: Number,
    basedOnFamousModel: String,
    specialFeatures: String,
  },
  {
    timestamps: true,
  }
);

const Pedal = mongoose.models.Pedal || mongoose.model("Pedal", pedalSchema);

export default Pedal;
