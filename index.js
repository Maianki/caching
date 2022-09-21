const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const blogsRouter = require("./routes/blogs");
const app = express();

mongoose.connect("mongodb://localhost:27017/myblog");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/blogs", blogsRouter);

const blogs = [
  {
    title: "test",
    createdAt: Date.now(),
    description: "Test description",
  },
  {
    title: "test - 2",
    createdAt: Date.now(),
    description: "Test description second",
  },
];

app.get("/", (req, res) => {
  res.send(`<h1>Home Page!!</h1>`);
});

app.listen(3000, () => {
  console.log("LISTENING IN PORT 3000");
});
