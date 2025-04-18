import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  return res.send("Welcome to my simple app..!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
