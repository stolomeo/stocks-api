import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  return client.db("Stocks");
};

export const getCollection = async () => {
  const col = await getDb();
  return col.collection("Top 25 Stocks in the S&P 500");
};
