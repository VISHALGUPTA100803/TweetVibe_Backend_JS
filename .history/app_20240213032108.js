require("dotenv").config();
const connectToDatabase = require("./db/connect");

const express = require("express");
const app = express();

const port = process.env.PORT 