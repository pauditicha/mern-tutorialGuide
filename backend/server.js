const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const colors = require("colors");
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);
