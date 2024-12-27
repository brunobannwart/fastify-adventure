export interface IEnvironmentSecrets {
  NODE_ENV?: string;
  PORT?: string;
  APPLICATION_NAME?: string;
  APPLICATION_API_KEY?: string;
  APPLICATION_TIMEZONE?: string;
  APPLICATION_LOCALE?: string;
}

export interface IConstants {
  env: string;
  port: number;

  application: {
    name: string;
    apiKey: string;
    timezone: string;
    locale: string;
  };
}