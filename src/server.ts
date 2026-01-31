import app from './app';
import { config } from './config/env';
import logger from './utils/logger';
import { Server } from 'http';

const port = config.PORT;

const server: Server = app.listen(port, () => {
  logger.info(`Server is running on port ${port} in ${config.NODE_ENV} mode`);
});

const gracefulShutdown = () => {
  logger.info('SIGTERM/SIGINT signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
