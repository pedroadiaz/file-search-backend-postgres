import { BaseModel } from "./baseModel";
import { ClassEntity } from './class';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export interface IPrompt extends BaseModel {
    prompt: string;
}

@Entity()
export class PromptEntity implements IPrompt {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ClassEntity, classEntity => classEntity.books)
    class: ClassEntity

    @Column()
    prompt: string;

    @Column()
    active: boolean;

    @Column()
    createdDate: Date;
}
