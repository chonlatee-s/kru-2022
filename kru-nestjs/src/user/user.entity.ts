import { MajorEntity } from 'src/major/major.entity';
import { StatsEntity } from 'src/stats/stats.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  generateId: string;
  @Column()
  email: string;
  @Column()
  fullname: string;
  @Column()
  profile: string;

  @Column()
  score: number;
  @UpdateDateColumn()
  updateAt: Date;
  @CreateDateColumn()
  createAt: Date;
  @Column()
  majorId: number;

  @OneToMany(() => StatsEntity, (s) => s.user)
  stats: StatsEntity[];

  @OneToOne(() => MajorEntity, (s) => s.user)
  major: MajorEntity;
}
