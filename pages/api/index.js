import dbConnect from "../../lib/dbConnect";
import Secreto from "../../models/Secreto";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const results = await Secreto.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: results });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const push = await Secreto.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: push });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
