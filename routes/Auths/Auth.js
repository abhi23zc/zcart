import express from 'express';
import { login, register } from '../../controllers/auth.js';

const router = express.Router();

// Authentication routes
router.post('/login', login)
router.post('/register', register)


export default router