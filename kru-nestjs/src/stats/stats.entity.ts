import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('stats')
export class StatsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  userId: number;
  @Column()
  score: number;
  @Column({ type: 'char' })
  status: string;
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => UserEntity, (u) => u.stats)
  user: UserEntity;
}