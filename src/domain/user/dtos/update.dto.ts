export interface UpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
  cellphone?: string;
  password?: string;
}

export interface UpdateUserResponse {
  id: string;
  email: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}