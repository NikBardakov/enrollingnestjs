import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { HistoryEntity } from './history.entity';
import { ScheduleEntity } from './schedule.entity';
import { ServiceItemEntity } from './service-item.entity';

@Entity('Booking')
export class BookingEntity {
    @PrimaryGeneratedColumn() id:string;

    @ManyToOne(()=>ScheduleEntity, (schedule)=>schedule.bookings)
    schedule: ScheduleEntity

    @ManyToOne(()=>CustomerEntity, (customer)=> customer.bookings)
    customer: CustomerEntity

    @Column({default: false})
    isCancelled: boolean

    @ManyToOne(()=>ServiceItemEntity, (serviceItem)=>serviceItem.bookings)
    serviceItem: ServiceItemEntity

    @OneToMany(()=>HistoryEntity, (history)=> history.booking)
    histories: HistoryEntity[]
}
