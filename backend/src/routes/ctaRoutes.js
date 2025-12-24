import express from 'express';
import { sendCtaForm } from '../controllers/ctaController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiter for CTA form - more lenient since it's just email
const ctaLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10, // Allow 10 requests per 10 minutes per IP
  message: 'Too many requests from this IP, please try again after 10 minutes',
});

// POST /api/cta
router.post('/', ctaLimiter, sendCtaForm);

export default router;

