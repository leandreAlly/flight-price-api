import express, { application } from "express";
import morgan from "morgan";
import cors from "cors";
import allRoutes from "./routes/index";

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.use("/api/v1", allRoutes);
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to my Flight Price Api" });
});

export default app;
