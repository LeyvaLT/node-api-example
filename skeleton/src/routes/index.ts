import { Router } from 'express';
import { getLiveness, getReadiness, getMetrics } from '../controllers/health.controller';
import studentRoutes from './student.routes';
import { collectDefaultMetrics } from 'prom-client';

// Initialize default metrics collection
collectDefaultMetrics();

const router = Router();

// Kubernetes Probes
router.get('/health/live', getLiveness);
router.get('/health/ready', getReadiness);

// Prometheus Metrics
router.get('/metrics', getMetrics);

// Application Routes
router.use('/students', studentRoutes);

export default router;