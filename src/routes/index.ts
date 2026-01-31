import { Router } from 'express';
import { getHealth } from '../controllers/health.controller';
import studentRoutes from './student.routes';

const router = Router();

router.get('/health', getHealth);
router.use('/students', studentRoutes);

export default router;
