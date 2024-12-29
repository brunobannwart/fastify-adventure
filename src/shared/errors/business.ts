import { CustomError } from 'ts-custom-error';

import { IDictionary } from '@shared/types';

export class BusinessError extends CustomError {
  code: string;
  options: IDictionary;
  isBusinessError = true;

  constructor (code: string, options?: IDictionary) {
    super(code);
    this.code = code;
    this.options = options;
  }
}

export const BusinessErrorCodes = {
  USER_NOT_FOUND: 'user_not_found',
  USER_ALREADY_REGISTERED: 'user_already_registered',
};
