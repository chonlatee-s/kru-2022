import { ForumEntity } from 'src/forum/forum.entity';
import { MajorEntity } from 'src/major/major.entity';
import { StatsEntity } from 'src/stats/stats.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(() => MajorEntity, (m) => m.user)
  major: MajorEntity;

  @OneToMany(() => ForumEntity, (f) => f.user)
  forum: ForumEntity[];
}
