import { Schema, model, models } from "mongoose";

const pedalSchema = new Schema({
  name: String,
  manufacturer: String,
  series: String,
  madeIn: String,
  category: String,
  additionalcategory: String,
  type: String,
  jacksMountedOn: String,
  bypass: String,
  battery: Boolean,
  voltage: Number,
  polarity: String,
  circuit: String,
  width: Number,
  height: Number,
  depth: Number,
  tubeEquipped: Boolean,
  colour: String,
  weight: Number,
  basedOnFamousModel: String,
  famousUsers: String,
  specialFeatures: String,
});

const Pedal = models.Pedal || model("Pedal", pedalSchema);

export default Pedal;
