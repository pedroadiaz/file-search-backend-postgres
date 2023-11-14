import { BaseModel } from "./baseModel";
import { Entity, Column } from 'typeorm';

@Entity()
export class FeedbackEntity extends BaseModel {
    @Column("varchar", { length: 100 })
    email: string;

    @Column("varchar", { length: 500 })
    feedback: string;
}