import { connectToDatabase } from "../../util/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();
  const restaurants = await db
    .collection("restaurants")
    .find({})
    .limit(20)
    .toArray();
  res.json(restaurants);
};


