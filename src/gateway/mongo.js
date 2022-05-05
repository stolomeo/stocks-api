import { MongoClient } from "mongodb";

const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect;
  return client.db("Top 25 Stocks in the S&P 500");
};
