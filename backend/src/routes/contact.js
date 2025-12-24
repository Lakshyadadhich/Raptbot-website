import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// --- Rate limiter for contact form ---
// Limit to 5 requests per 10 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: 'Too many contact requests from this IP, please try again after 10 minutes',
});

// POST /api/contact
// Apply rate limiter middleware specifically to this route
router.post('/', contactLimiter, sendContactEmail);

// ✅ Export router as default for ES Modules
export default router;
