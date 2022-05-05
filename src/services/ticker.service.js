import { getCollection } from "../gateway/mongo";

export const insertStock = async (stock) => {
  const col = await getCollection();
  const { insertedId } = await col.insertOne(stock);
  return insertedId;
};
