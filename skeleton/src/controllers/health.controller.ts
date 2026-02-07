import { Request, Response } from 'express';
import { register } from 'prom-client';

/**
 * Liveness Probe: Checks if the application process is running.
 * K8s uses this to know if it needs to restart the container.
 */
export const getLiveness = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'UP',
    check: 'liveness',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Readiness Probe: Checks if the application is ready to accept traffic.
 * This should check database connections, etc.
 * K8s uses this to know if it should send traffic to this pod.
 */
export const getReadiness = (req: Request, res: Response) => {
  // TODO: Add actual DB connection check here
  // const isDbConnected = await db.checkConnection();
  const isReady = true;

  if (isReady) {
    res.status(200).json({
      status: 'UP',
      check: 'readiness',
      timestamp: new Date().toISOString(),
    });
  } else {
    res.status(503).json({
      status: 'DOWN',
      check: 'readiness',
      timestamp: new Date().toISOString(),
    });
  }
};

/**
 * Metrics Endpoint: Exposes Prometheus metrics.
 */
export const getMetrics = async (req: Request, res: Response) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (err) {
    res.status(500).end(err);
  }
};