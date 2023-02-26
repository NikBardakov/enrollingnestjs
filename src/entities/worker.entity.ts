import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobEntity } from './job.entity';
import { PortfolioEntity } from './portfolio.entity';
import { ScheduleEntity } from './schedule.entity';
import { ServiceItemEntity } from './service-item.entity';

@Entity('Worker')
export class WorkerEntity {
    @PrimaryGeneratedColumn() 
    id:string;

    @Column()
    name: string

    @Column()
    isActive: boolean

    @Column({
        type: "bytea"
    })
    photo: Buffer

    @ManyToMany(()=> JobEntity)
    @JoinTable()
    jobs: JobEntity[]

    @OneToMany(()=> PortfolioEntity, (portfolio)=>portfolio.worker)
    portfolios: PortfolioEntity[]

    @OneToMany(()=>ServiceItemEntity, (serviceItem)=>serviceItem.worker)
    serviceItems: ServiceItemEntity[]

    @Column()
    timeslotDuration: number

    @OneToMany(()=>ScheduleEntity, (schedule)=> schedule.worker)
    schedules: ScheduleEntity[]

}
