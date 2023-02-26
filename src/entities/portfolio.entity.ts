import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TagEntity } from './tag.entity';
import { WorkerEntity } from './worker.entity';

@Entity('Portfolio')
export class PortfolioEntity {
    @PrimaryGeneratedColumn() id:string;

    @ManyToOne(()=>WorkerEntity, (worker)=> worker.portfolios)
    worker: WorkerEntity

    @Column({
        type: "bytea"
    })
    photo: Buffer
    
    @Column({nullable: true})
    description: string

    @ManyToMany(()=>TagEntity)
    @JoinTable()
    tags:TagEntity[];

    
}
