export interface User {
  id?: number;
  uuId?: string;
  generateId: string;
  email: string;
  fullname: string;
  profile: string;

  provider?: string;

  score?: number;
  updateAt?: Date;
  createAt?: Date;
  majorId?: number;
}
