import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/user.route.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://sample-user-auth-fe.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Use CORS
app.use(cors(corsOptions));

// ✅ Handle preflight requests safely (Express v5 compatible)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (corsOptions.origin.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", corsOptions.methods.join(","));
  res.header("Access-Control-Allow-Headers", corsOptions.allowedHeaders.join(","));
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Auth API is running!' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
