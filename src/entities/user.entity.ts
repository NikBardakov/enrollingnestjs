import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { HistoryEntity } from './history.entity';
import { Role } from './role.enum';
import { WorkerEntity } from './worker.entity';

@Entity('User')
export class UserEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isLocked: boolean;

  @Column({type:"enum", enum: Role})
  roles: Role;

  @OneToOne(()=>WorkerEntity)
  @JoinColumn()
  worker: WorkerEntity

  @OneToMany(()=>HistoryEntity,(history)=> history.user)
  histories: HistoryEntity[]
}