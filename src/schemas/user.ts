import { BaseModel } from "./baseModel";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ClassEntity } from "./class";


export interface IUser extends BaseModel {
    email: string;
    firstName: string;
    lastName: string;
    paid: boolean;
    nextPayDate: Date;
    isAdmin: boolean;
}

@Entity()
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 250 })
    email: string;

    @OneToMany(() => ClassEntity, classEntity => classEntity.user)
    classes: ClassEntity[]

    @Column("varchar", { length: 250 })
    firstName: string;

    @Column("varchar", { length: 250 })
    lastName: string;

    @Column("bool")
    paid: boolean;

    @Column("timestamp")
    nextPayDate: Date;

    @Column("bool")
    isAdmin: boolean;

    @Column("bool")
    active: boolean;

    @Column("timestamp")
    createdDate: Date;
}
