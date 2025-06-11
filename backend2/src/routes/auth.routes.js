import express from 'express';
import { registerCampesino, login } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register/campesino', registerCampesino);
router.post('/register/funcionario', registerCampesino);
router.post('/register/admin', registerCampesino);
router.post('/login', login);

export default router;