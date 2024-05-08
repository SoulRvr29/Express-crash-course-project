// const express = require("express");
import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getPost);

// create new post
router.post("/", createPost);

// update post
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

// module.exports = router;
export default router;
