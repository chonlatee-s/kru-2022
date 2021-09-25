import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

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
}
