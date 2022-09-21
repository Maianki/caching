const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", { blogs });
});

router.post("/", (req, res) => {
  const blog = new Blog({});
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  console.log(blog);
  res.render("details", { blog });
});

module.exports = router;
