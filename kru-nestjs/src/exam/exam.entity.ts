import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('exam')
export class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  img: string;
  @Column()
  question: string;
  @Column()
  choice1: string;
  @Column()
  choice2: string;
  @Column()
  choice3: string;
  @Column()
  choice4: string;
  @Column()
  answer: string;
  @Column()
  ref: string;
  @Column()
  type: string;
  @CreateDateColumn()
  createAt: Date;
}
