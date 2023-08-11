require("dotenv").config();

const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { DataSource } = require("typeorm");

const appDataSource = new DataSource({
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// Health check
app.get("/ping", function (req, res) {
  res.status(200).json({ message: "pong" });
});

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await appDataSource
    .initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((error) => {
      console.error("Error during Data Source initialization", error);
    });
  console.log(`Listening to request on port: ${PORT}`);
});
