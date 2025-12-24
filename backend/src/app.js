import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.js';
import careerRoutes from './routes/careerRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import ctaRoutes from './routes/ctaRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();

// // ✅ Rate Limiter
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 minutes
//   max: 1010,
//   message: 'Too many requests from this IP, please try again later.',
// });

// ✅ CORS setup
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://raptbot.com'] 
    : ['http://localhost:8000', 'http://localhost:3000', 'http://127.0.0.1:8000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ✅ Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data
// app.use(limiter);

// ✅ API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/newsletter', subscriptionRoutes);
app.use('/api/cta', ctaRoutes);

// ✅ Serve Gatsby frontend
const frontendDir = path.join(__dirname, '../../frontend/public');
// const frontendDir = path.join(__dirname, '../public');

app.use(express.static(frontendDir));

app.use((req, res) => res.sendFile(path.join(frontendDir, 'index.html')));


// ✅ Test API route
app.get('/api', (req, res) => {
  res.send('API running successfully ');
});

// ✅ Start server (only if not imported)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
