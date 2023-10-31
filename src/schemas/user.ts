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

    @Column()
    email: string;

    @OneToMany(() => ClassEntity, classEntity => classEntity.user)
    classes: ClassEntity[]

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    paid: boolean;

    @Column()
    nextPayDate: Date;

    @Column()
    isAdmin: boolean;

    @Column()
    active: boolean;

    @Column()
    createdDate: Date;
}
