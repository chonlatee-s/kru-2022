export interface Exam {
  id?: number;
  uuId?: string;
  img: string;
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  answer: string;
  ref: string;
  type: string;
  createAt?: Date;
  check?: boolean;
}
