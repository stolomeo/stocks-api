import { getCollection } from "../gateway/mongo";

export const insertStock = async (stock) => {
  const col = await getCollection();
  const { insertedId } = await col.insertOne(stock);
  return insertedId;
};

export const getStock = async (stock) => {
  const col = await getCollection();
  const stock = await col.findOne({ name });
};
export const getStocks = async (stock) => {
  const col = await getCollection();
  const stock = await col.find({});
};
