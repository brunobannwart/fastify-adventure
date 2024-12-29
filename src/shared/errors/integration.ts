import { CustomError } from 'ts-custom-error';

import { IDictionary } from '@shared/types';

export class IntegrationError extends CustomError {
  isIntegrationError = true;
  mechanism: string;
  options: IDictionary;

  constructor (
    mechanism: string,
    options: IDictionary
  ) {
    super();
    this.mechanism = mechanism;
    this.options = options;
  }
}
