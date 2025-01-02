import { IMemoryUsage } from '@shared/types';

export function getMemoryUsage (): IMemoryUsage {
  const { rss, heapTotal, heapUsed } = process.memoryUsage();

  return {
    rss: `${Math.round((rss / 1024 / 1024) * 100) / 100} MB`,
    heapTotal: `${Math.round((heapTotal / 1024 / 1024) * 100) / 100} MB`,
    heapUsed: `${Math.round((heapUsed / 1024 / 1024) * 100) / 100} MB`,
  };
}