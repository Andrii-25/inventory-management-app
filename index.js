const express = require("express");
const cors = require("cors");
require("dotenv/config");

const app = express();
const itemRouter = require("./routes/item.routes.js");

app.use(express.json());
app.use(cors());

app.use("/items", itemRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("App is running...");
});
