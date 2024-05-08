// const express = require("express");
// const posts = require("./routes/posts");
import express from "express";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

// routes
app.use("/api/posts", posts);

// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
