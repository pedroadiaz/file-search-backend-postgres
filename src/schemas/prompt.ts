import { BaseModel } from "./baseModel";
import { ClassEntity } from './class';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export interface IPrompt extends BaseModel {
    prompt: string;
}

@Entity()
export class PromptEntity implements IPrompt {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => ClassEntity, classEntity => classEntity.books)
    class: ClassEntity

    @Column("varchar", { length: 500 })
    prompt: string;

    @Column("bool")
    active: boolean;

    @Column("timestamp")
    createdDate: Date;
}
