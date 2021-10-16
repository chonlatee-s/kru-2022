import { ForumDetailEntity } from 'src/forum-detail/forum-detail.entity';
import { UserEntity } from 'src/user/user.entity';
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

@Entity('forum')
export class ForumEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column({ type: 'text' })
  topic: string;
  @Column()
  userId: number;
  @UpdateDateColumn()
  updateAt: Date;
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.forum)
  user: UserEntity;

  @OneToMany(() => ForumDetailEntity, (fd) => fd.forum)
  detail: ForumDetailEntity[];
}
