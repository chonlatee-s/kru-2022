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
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.stats)
  user: UserEntity;
}
