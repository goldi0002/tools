import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

// Serve React
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () =>
  console.log(`API running on http://localhost:${PORT}`)
);
