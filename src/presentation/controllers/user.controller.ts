import { ICustomRequest, ICustomResponse } from '@shared/types';

class UserController {
  constructor () { }

  async create (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }

  async update (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }

  async get (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }

  async getWithPagination (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }

  async getAll (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }

  async delete (req: ICustomRequest, res: ICustomResponse): Promise<ICustomResponse> {
    return res.status(201).send({});
  }
}

export default new UserController();