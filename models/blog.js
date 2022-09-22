const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
