const Post = require("../models/postModel.js");
const { validationResult } = require('express-validator');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.userData.userId;
    const post = new Post({
      title,
      content,
      author,
    });
    await post.save();
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const posts = await Post.find()
      .skip(skip)
      .limit(limit)
      .populate("author", "firstname lastname");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate(
      "author",
      "firstname lastname"
    );
    if (!post) {
      return res.status(404).json({ message: "No post found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array() });
    }
    
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.title = title;
    post.content = content;
    post.updatedAt = Date.now();
    await post.save();
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res
        .status(404)
        .json({ message: "No post with this id was found." });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
