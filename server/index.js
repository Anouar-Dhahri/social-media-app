import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import dbConnect from './configs/index.js'

import { router as authRoutes } from "./routes/auth.routes.js";
import { router as userRoutes } from "./routes/users.routes.js";
import { router as postRoutes } from "./routes/posts.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ limit:"30mb", extended: true }))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan('common'))
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const port = 8080

await dbConnect();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is listening on port ${port}!`))