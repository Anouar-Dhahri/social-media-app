import express from "express";
import { login, register } from "../controllers/auth.js";
import upload  from '../helpers/upload.js';

export const router = express.Router();

router.post("/login", login);
router.post("/register", upload.single("picture"), register);
