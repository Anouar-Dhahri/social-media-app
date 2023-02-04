import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

export const router = express.Router();

/* READ */
router.get("/get/:id", verifyToken, getUser);
router.get("/get/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/update/:id/:friendId", verifyToken, addRemoveFriend);
