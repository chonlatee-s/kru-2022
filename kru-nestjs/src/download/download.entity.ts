import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('download')
export class DownloadEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column()
  topic: string;
  @Column({ type: 'text' })
  ref: string;
  @Column({ type: 'text' })
  credit: string;
  @CreateDateColumn()
  createAt: Date;
}
