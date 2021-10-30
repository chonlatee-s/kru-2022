export interface Exam {
  uuId: string;
  img: string;
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  answer: string;

  num: number;
  correctAnswer: string;
  check: boolean;
}