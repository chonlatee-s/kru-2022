export interface Job {
  id?: number;
  uuId?: string;
  topic: string;
  ref: string;
  dateExpire: Date;
  createAt?: Date;
}
