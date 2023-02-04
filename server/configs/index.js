import mongoose from 'mongoose';
import User from "../models/User.js";
import Post from "../models/Post.js";
import { users, posts } from "../data/index.js";

const bdConnect = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to mongodb")
    /* ADD DATA ONE TIME */
    //User.insertMany(users);
    //Post.insertMany(posts);
  }).catch((err) => {
    console.log(err)
  })
}

export default bdConnect
