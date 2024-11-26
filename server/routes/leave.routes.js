import { Router } from 'express';
import { getLeaves, applyLeave } from '../controllers/leave.controller.js';

const router = Router();

router.get('/', getLeaves);
router.post('/apply', applyLeave);

export default router