const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({ origin: "*" }));

app.use("/static", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the server", version: "v1.0.2" });
});

app.use("/api/v1/rajkumbaji", (req, res) => {
  res.send("Raj Kumbaji");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
