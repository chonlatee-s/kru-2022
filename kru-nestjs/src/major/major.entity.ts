import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('major')
export class MajorEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  major: string;
  @CreateDateColumn()
  createAt: Date;

  @OneToMany(() => UserEntity, (m) => m.major)
  user: UserEntity[];
}
