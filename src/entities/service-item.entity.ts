import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { WorkerEntity } from './worker.entity';

@Entity('ServiceList')
export class ServiceItemEntity {
    @PrimaryGeneratedColumn() id:string;

    @ManyToOne(()=>WorkerEntity, (worker)=>worker.serviceItems)
    worker: WorkerEntity

    @Column()
    name: string

    @Column()
    workName: string

    @Column()
    timeslotNumber: number

    @Column({default: false})
    isFavorite: boolean

    @Column()
    description: string

    @OneToMany(()=>BookingEntity, (booking)=> booking.serviceItem)
    bookings: BookingEntity[]

}
