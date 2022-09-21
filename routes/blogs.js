const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", { blogs });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", async (req, res) => {
  const { title, description, author, createdAt } = req.body;
  const newBlog = new Blog({ title, description, author, createdAt });
  await newBlog.save();
  res.redirect(`/blogs/${newBlog._id}`);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.render("details", { blog });
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.render("edit", { blog });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, author, createdAt } = req.body;
  const blog = await Blog.findByIdAndUpdate(
    id,
    {
      title,
      description,
      author,
      createdAt,
    },
    { runValidators: true }
  );
  res.redirect(`/blogs/${blog._id}`);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);
  res.redirect("/blogs");
});

module.exports = router;
