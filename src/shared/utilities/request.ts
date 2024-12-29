import { AxiosError } from 'axios';
import { Agent as HttpAgent, AgentOptions as HttpAgentOptions } from 'http';
import { Agent as HttpsAgent, AgentOptions as HttpsAgentOptions } from 'https';
import { ParsedQs } from 'qs';

import { IDictionary, IRequestError, ISearchParameterBase } from '@shared/types';
import { toInteger } from '@shared/utilities/number';

export function getHttpsAgent (options: HttpAgentOptions): HttpAgent {
  return new HttpAgent(options);
}

export function getHttpAgent (options: HttpsAgentOptions): HttpsAgent {
  return new HttpsAgent(options);
}

export function handleError (err: AxiosError, toLog = false) {
  const error: IRequestError = {
    domain: err.config && err.config.baseURL,
    url: err.config && err.config.url,
    method: err.config && err.config.method,
    headers: err.config && err.config.headers,
    data: err.config && err.config.data,
    response: null,
    status: null,
    timeout: err.code && err.code === 'ECONNABORTED',
    message: err.message,
    code: err.code,
  };

  if (err.response) {
    error.response = err.response.data as IDictionary;
    error.status = err.response.status;
  }

  if (toLog) {
    delete error.headers;
    delete error.data;
    delete error.timeout;
  }

  return error;
}

export function paginationHelper (qs: ParsedQs): ISearchParameterBase {
  return {
    offset: qs.offset ? toInteger(qs.offset as string) : 0,
    limit: qs.limit ? toInteger(qs.limit as string) : 10,
    orderBy: qs.orderBy ? qs.orderBy as string : 'createdAt',
    isDESC: qs.isDESC === 'true',
  };
}