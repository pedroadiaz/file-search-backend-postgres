import { BaseModel } from "./baseModel";
import { Entity, Column, OneToMany } from 'typeorm';
import { ClassEntity } from "./class";

@Entity()
export class UserEntity extends BaseModel {
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
}
