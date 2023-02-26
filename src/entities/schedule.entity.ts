import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { WorkerEntity } from './worker.entity';

@Entity('Schedule')
export class ScheduleEntity {
    @PrimaryGeneratedColumn() id:string;

    @ManyToOne(()=> WorkerEntity, (worker)=>worker.schedules)
    worker: WorkerEntity

    @Column({type: 'date' })
    date: Date

    @Column({type: 'time with time zone'})
    startTime: Date

    @Column({type: 'time with time zone'})
    endTime: Date

    @Column({default: true})
    isActive: boolean

    @OneToMany(()=> BookingEntity, (booking)=>booking.schedule)
    bookings: BookingEntity[]

    
    

}
