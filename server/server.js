import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ ok: true });
});
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
})

app.use(express.static(path.join(__dirname, "public")));

// only enable AFTER React build exists
if (process.env.NODE_ENV === "production") {
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
