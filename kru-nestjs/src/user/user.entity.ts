import { StatsEntity } from 'src/stats/stats.entity';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
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
  major: string;

  @OneToMany(() => StatsEntity, (s) => s.user)
  stats: StatsEntity[];
}
