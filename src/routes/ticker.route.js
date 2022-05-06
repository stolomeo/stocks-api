import { Router } from "express";
import {
  insertStock,
  getStock,
  getStocks,
  updateStock,
  deleteStock,
} from "../services/ticker.service.js";

export const stockRouter = Router();

stockRouter.post("/stocks", async (req, res) => {
  const stock = req.body;
  const id = await insertStock(stock);
  res.send(id.toString());
});
