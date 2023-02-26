import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobEntity } from './job.entity';

@Entity('Service')
export class ServiceEntity {
    @PrimaryGeneratedColumn() id:string;

    @Column()
    name: string;

    @OneToMany(()=>JobEntity, (job)=> job.service )
    jobs: ServiceEntity[];

}
