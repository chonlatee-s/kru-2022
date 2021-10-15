import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('course')
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  img: string;
  @Column()
  topic: string;
  @Column({ type: 'text' })
  detail: string;
  @Column({ type: 'text' })
  ref: string;
  @CreateDateColumn()
  createAt: Date;
}
