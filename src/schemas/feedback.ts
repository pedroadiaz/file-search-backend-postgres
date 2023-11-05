import { BaseModel } from "./baseModel";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


export interface IFeedback extends BaseModel {
    email: string;
    feedback: string;
}

@Entity()
export class FeedbackEntity implements IFeedback {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column("varchar", { length: 100 })
    email: string;

    @Column("varchar", { length: 500 })
    feedback: string;

    @Column("bool")
    active: boolean;

    @Column("timestamp")
    createdDate: Date;
}