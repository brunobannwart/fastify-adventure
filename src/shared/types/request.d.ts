import { FastifyReply, FastifyRequest } from 'fastify';

import { ISession } from '@shared/types/session';

export interface ICustomRequest extends FastifyRequest {
  session: ISession;
}

export interface ICustomResponse extends FastifyReply {}