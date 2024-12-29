import { CustomError } from 'ts-custom-error';

export class SchemaError extends CustomError {
  public readonly message: string;
  isSchemaError = true;

  constructor (message: string) {
    super();
    this.message = message;
  }
}

export const UserSchemaErrorCodes = {
  INVALID_NAME_FORMAT: 'invalid_name_format',
  INVALID_EMAIL_FORMAT: 'invalid_email_format',
  INVALID_CELLPHONE_FORMAT: 'invalid_cellphone_format',
  INVALID_PASSWORD_FORMAT: 'invalid_password_format',
};