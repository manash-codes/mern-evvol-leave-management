import { Router } from 'express';
import { getLeaves, applyLeave } from '../controllers/leave.controller.js';

const router = Router();

router.get('/', getLeaves);
router.patch('/apply', applyLeave);

export default router