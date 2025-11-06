import express from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUser,
  updateUserProfile
} from '../controllers/user.controller.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/user', protect, getCurrentUser); // Changed from /profile to /user
router.put('/profile', protect, updateUserProfile); // Removed :id parameter

export default router;