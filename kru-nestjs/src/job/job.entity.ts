import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('job')
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  topic: string;
  @Column({ type: 'text' })
  ref: string;
  @Column()
  dateExpire: Date;
  @CreateDateColumn()
  createAt: Date;
}
