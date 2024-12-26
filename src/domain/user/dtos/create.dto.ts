export interface CreateUserDTO {
  name: string;
  email: string;
  cellphone: string;
  password: string;
}

export interface CreateUserResponse {
  id: string;
  email: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}