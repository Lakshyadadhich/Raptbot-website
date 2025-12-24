import express from "express";
import { applyForJob } from "../controllers/careerController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

// ✅ Add multer middleware to handle file upload
router.post("/apply", upload.single("resume"), applyForJob);

export default router;