export interface IEnvironmentSecrets {
  NODE_ENV?: string;
  PORT?: string;
  APPLICATION_NAME?: string;
  APPLICATION_API_KEY?: string;
  APPLICATION_TIMEZONE?: string;
  APPLICATION_LOCALE?: string;

  DATABASE_HOST?: string;
  DATABASE_PORT?: string;
  DATABASE_NAME?: string;
  DATABASE_USERNAME?: string;
  DATABASE_PASSWORD?: string;
  DATABASE_CERTIFICATE?: string;
  DATABASE_POOL_MIN?: string;
  DATABASE_POOL_MAX?: string;

  AWS_ACCESS_KEY?: string;
  AWS_SECRET_KEY?: string;
  AWS_CLOUDWATCH_REGION?: string;
  AWS_CLOUDWATCH_GROUP?: string;
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

  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
    certificate?: string;

    pool: {
      min: number;
      max: number;
    }
  };

  aws: {
    accessKey: string;
    secretKey: string;

    cloudwatch: {
      region: string;
      group: string;
    };
  }
}