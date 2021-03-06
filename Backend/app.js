require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

const PORT = process.env.PORT || 5000;

const connString = process.env.MONGO_URI;
mongoose
  .connect(connString)
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen({ port: PORT });
  })
  .catch((err) => console.log("Not Connected to the database", err));
