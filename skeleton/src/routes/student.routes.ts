import { Router } from 'express';
import { getStudents } from '../controllers/student.controller';

const router = Router();

router.get('/', getStudents);

export default router;
