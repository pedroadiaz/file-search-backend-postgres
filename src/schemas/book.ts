import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BaseModel } from "./baseModel";
import { ClassEntity } from './class';

export interface IBook extends BaseModel {
    name: string;
}

@Entity()
export class BookEntity implements IBook {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ClassEntity, classEntity => classEntity.books)
    class: ClassEntity

    @Column()
    name: string;

    @Column()
    active: boolean;

    @Column()
    createdDate: Date;
}
