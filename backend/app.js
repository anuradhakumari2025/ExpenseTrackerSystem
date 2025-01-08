const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./db");
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");
const cookieParser = require("cookie-parser");

connectToDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use('/users', userRoutes);
app.use('/admin',adminRoutes)

module.exports = app;
