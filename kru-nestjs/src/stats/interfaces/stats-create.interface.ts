export interface Datas {
  userId?: number;
  score: number;
}
export interface StatsCreate {
  id?: string;
  datas: Datas;
}
