/* eslint-disable no-unused-vars */
export enum GrantType {
  PASSWORD = 'password',
  CLIENT_CREDENTIALS = 'client_credentials',
  REFRESH_TOKEN = 'refresh_token',
}

export enum CredentialsType {
  PASSWORD = 1,
  RECOVERY_PASSWORD_TOKEN = 2,
  VERIFY_VALID_EMAIL_TOKEN = 3,
  MULTI_FACTOR_CODE = 4,
}