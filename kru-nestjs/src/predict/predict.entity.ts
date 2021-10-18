import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('predict')
export class PredictEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  @Generated('uuid')
  uuId: string;
  @Column({ type: 'text' })
  result: string;
}
