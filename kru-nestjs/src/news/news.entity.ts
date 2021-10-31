import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column({ type: 'text' })
  news: string;
  @Column({ type: 'text' })
  ref: string;
  @Column('varchar', { length: 5 })
  slide: string;
  @CreateDateColumn()
  createAt: Date;
}
