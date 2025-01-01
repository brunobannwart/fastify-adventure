import { FastifyReply, FastifyRequest } from 'fastify';

export interface ICustomRequest extends FastifyRequest {}

export interface ICustomResponse extends FastifyReply {}