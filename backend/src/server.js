import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import coreRoutes from "./routes/core.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok", service: "mogosquare-api" }));
app.use("/api/auth", authRoutes);
app.use("/api", coreRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`MoGo Square API running on port ${port}`);
});
