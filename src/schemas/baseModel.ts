import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BaseModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("bool")
    active: boolean;

    @Column("timestamp")
    createdDate: Date;
}