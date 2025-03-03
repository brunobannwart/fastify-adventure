export interface IDictionary<T = string | number | boolean> {
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
  headers?: IDictionary;
  data?: IDictionary;
  response?: IDictionary;
  timeout?: boolean;
  message?: string;
  code?: string;
  status?: number;
}