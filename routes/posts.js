// const express = require("express");
import express from "express";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "post 1",
  },
  {
    id: 2,
    title: "post 2",
  },
  {
    id: 3,
    title: "post 3",
  },
];

// get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

// get single post
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    // return res.status(404).json({ msg: `Post with id of ${id} was not found` });
    const error = new Error(`Post with id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(202).json(post);
});

// create new post
router.post("/", (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

// update post
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(post);
});

// delete post
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(post);
});

// module.exports = router;
export default router;
