const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  
} = require("../controllers/blogController");


router.get("/", getAllBlogs);


router.post("/", createBlog);


router.get("/:blogId", getBlogById);


router.put("/:blogId", updateBlog);


router.delete("/:blogId", deleteBlog);


module.exports = router;
