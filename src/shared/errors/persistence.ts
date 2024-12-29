import { CustomError } from 'ts-custom-error';

import { IDictionary } from '@shared/types';

export class PersistenceError extends CustomError {
  code: string;
  options: IDictionary;
  isPersistenceError = true;

  constructor (code: string, options?: IDictionary) {
    super(code);
    this.code = code;
    this.options = options;
  }
}

export const PersistenceErrorCodes = {
  PAGINATION_ENTITY: 'pagination_entity',
  CREATE_ENTITY: 'create_entity',
  BULK_INSERT_ENTITY: 'bulk_insert_entity',
  UPDATE_ENTITY: 'update_entity',
  GET_ENTITY: 'get_entity',
  DELETE_ENTITY: 'delete_entity',
  COUNT_ENTITY: 'count_entity',
};
