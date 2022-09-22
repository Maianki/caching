const client = require("../common/common");

const cacheBlog = async (req, res, next) => {
  const { id } = req.params;
  const value = await client.get(`blog-${id}`);
  const blog = JSON.parse(value);
  console.log("cached data -->", blog);
  if (blog) {
    res.render("details", { blog });
  } else {
    next();
  }
};

module.exports = cacheBlog;
