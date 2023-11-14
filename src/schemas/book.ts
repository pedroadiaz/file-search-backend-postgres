import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseModel } from "./baseModel";
import { ClassEntity } from './class';

@Entity()
export class BookEntity extends BaseModel {
    @ManyToOne(() => ClassEntity, classEntity => classEntity.books)
    class: ClassEntity

    @Column("varchar", { length: 250 })
    name: string;
}
