import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('forum')
export class ForumEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  topic: string;
  @Column()
  userId: number;
  @UpdateDateColumn()
  updateAt: Date;
  @CreateDateColumn()
  createAt: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
