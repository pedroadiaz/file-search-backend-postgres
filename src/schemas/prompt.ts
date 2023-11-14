import { BaseModel } from "./baseModel";
import { ClassEntity } from './class';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class PromptEntity extends BaseModel {
    @ManyToOne(() => ClassEntity, classEntity => classEntity.books)
    class: ClassEntity

    @Column("varchar", { length: 500 })
    prompt: string;
}
