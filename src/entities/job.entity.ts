import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServiceEntity } from './service.entity';

@Entity('Job')
export class JobEntity {
    @PrimaryGeneratedColumn() 
    id:string;

    @Column()
    name: string

    @ManyToOne(()=> ServiceEntity, (service)=>service.jobs)
    service: ServiceEntity
}
