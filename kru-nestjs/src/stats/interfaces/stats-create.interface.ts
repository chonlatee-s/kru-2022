export interface Datas {
  userId?: number;
  score: number;
  status: string;
}

export interface StatsCreate {
  id?: string;
  datas: Datas;
}
