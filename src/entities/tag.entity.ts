import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tag')
export class TagEntity {
    @PrimaryGeneratedColumn() id:string;

    @Column()
    name: string
}
