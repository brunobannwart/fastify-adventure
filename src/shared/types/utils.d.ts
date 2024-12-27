export interface IDictionary<T> {
  [key: string]: T | undefined | null;
}

export interface IMemoryUsage {
  rss: string;
  heapTotal: string;
  heapUsed: string;
}

export interface IHealthStatus {
  app: string;
  env: Environments;
  startedAt: string;
  uptime: string;
  now: string;
  memory: IMemoryUsage;
}

export interface IRequestError {
  domain?: string;
  url?: string;
  method?: string;
  headers?: Record<string, unknown>;
  data?: Record<string, unknown>;
  response?: Record<string, unknown>;
  timeout?: boolean;
  message?: string;
  code?: string;
  status?: number;
}