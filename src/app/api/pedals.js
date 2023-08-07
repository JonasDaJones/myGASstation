import connectMongo from "../../utils/db";
import Pedal from "../../models/pedalModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function userAPI(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    if (req.method === "POST") {
      console.log("CREATING DOCUMENT");
      const createdPedal = await Pedal.create(req.body);
      console.log("CREATED DOCUMENT");
      res.json({ createdPedal });
    } else if (req.method === "GET") {
      console.log("FETCHING DOCUMENTS");
      const fetchedPedals = await Pedal.find({});
      console.log("FETCHED DOCUMENTS");
      res.json({ fetchedPedals });
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
