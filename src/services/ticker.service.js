import { getCollection } from "../gateway/mongo";

export const insertStock = async (stock) => {
  const col = await getCollection();
  const { insertedId } = await col.insertOne(stock);
  return insertedId;
};

export const getStock = async (name) => {
  const col = await getCollection();
  const stock = await col.findOne({ name });
  return stock;
};

export const getStocks = async (name) => {
  const col = await getCollection();
  const stocks = await col.find({});
  return stocks;
};

export const updateStock = async (name, updateObj) => {
  const col = await getCollection();
  await col.updateOne({ name }, { set: updateObj });
};

export const deleteStock = async (name) => {
  await updateStock(name, { deletedAt: new Date() });
};
