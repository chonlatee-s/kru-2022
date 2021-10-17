export interface User {
  id?: number;
  uuId?: string;
  generateId: string;
  email: string;
  fullname: string;
  profile: string;

  provider?: string;
  type: string;

  score?: number;
  updateAt?: Date;
  createAt?: Date;
  majorId?: number;
}
