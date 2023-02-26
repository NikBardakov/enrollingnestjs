import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';

@Entity('Customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn() id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => BookingEntity, (booking) => booking.customer)
  bookings: BookingEntity[];
}
