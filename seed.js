const mongoose = require("mongoose");
const Blog = require("./models/blog");

mongoose.connect("mongodb://localhost:27017/myblog");

const b = new Blog({
  title: "Journey of my life",
  description: "This is a blog about the journey from a saint",
  author: "Saint singh",
});

b.save()
  .then((p) => console.log(p))
  .catch((err) => console.log(err));

const seedBlogs = [
  {
    title: "How to host a MERN web app",
    description: "This blog is all about hosting your MERN web app",
    author: "Kent C Dodds",
  },
  {
    title: "All about useEffect hooks",
    description:
      "useEffect is one of the most commonly used hook in react. This blog will tell everything you need to know about useEffect hook.",
    author: "Dan Abramov",
  },
  {
    title: "Layouts in CSS",
    description:
      "Flexbox and Grid layouts to make your websites responsive within minutes.",
    author: "Jen Kramer",
  },
];

Blog.insertMany(seedBlogs)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
