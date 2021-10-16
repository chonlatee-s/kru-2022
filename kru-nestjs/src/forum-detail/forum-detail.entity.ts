import { ForumEntity } from 'src/forum/forum.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('detail')
export class ForumDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column({ type: 'text' })
  answer: string;
  @Column()
  forumId: number;
  @Column()
  userId: number;
  @UpdateDateColumn()
  updateAt: Date;
  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => ForumEntity, (f) => f.detail)
  forum: ForumEntity;
}
