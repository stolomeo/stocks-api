import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { stockRouter } from "../src/routes/ticker.route.js";

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(stockRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
