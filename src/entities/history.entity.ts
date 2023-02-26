import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { UserEntity } from './user.entity';

export enum eActions {
  ENROLL = 'Запись',
  CANCEL = 'Отмена',
}
@Entity('History')
export class HistoryEntity {
  @PrimaryGeneratedColumn() id: string;

  @ManyToOne(() => BookingEntity, (booking) => booking.histories)
  booking: BookingEntity;

  @Column({ type: 'enum', enum: eActions })
  action: eActions;

  @Column()
  reason: string;

  @ManyToOne(() => UserEntity, (user) => user.histories, { nullable: true })
  user: UserEntity;
}
