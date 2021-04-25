const express = require("express");
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://localhost/ticket-db", {useNewUrlParser: true})
app.use("/api", require("./api"));

app.listen(7000, () => {
  console.log("server is listening");
});