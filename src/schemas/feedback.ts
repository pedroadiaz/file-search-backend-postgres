import { BaseModel } from "./baseModel";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


export interface IFeedback extends BaseModel {
    email: string;
    feedback: string;
}

@Entity()
export class FeedbackEntity implements IFeedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    feedback: string;

    @Column()
    active: boolean;

    @Column()
    createdDate: Date;
}