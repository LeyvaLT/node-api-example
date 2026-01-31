import dotenv from 'dotenv';
import { z } from 'zod';
import logger from '../utils/logger';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000').transform((val) => parseInt(val, 10)),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATA_SOURCE: z.enum(['mock', 'postgres']).default('mock'),
});

const parseEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.error('Invalid environment variables:', error.format());
    } else {
      logger.error('Error parsing environment variables');
    }
    process.exit(1);
  }
};

export const config = parseEnv();
