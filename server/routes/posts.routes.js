import express from "express";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import upload  from '../helpers/upload.js';

export const router = express.Router();

/* CREATE */
router.post("/add", verifyToken, upload.single("picture"), createPost)
/* READ */
router.get("/get", verifyToken, getFeedPosts);
router.get("/get/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/update/:id/like", verifyToken, likePost);

