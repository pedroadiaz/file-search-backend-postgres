import { UserEntity } from "@schemas/user";
import { AbstractRepo } from "./abstract.repo";
import { DataSource } from 'typeorm';


export class UserRepo extends AbstractRepo<UserEntity> {
    constructor(protected dataSource: DataSource) {
        super(dataSource);
        this.toType = UserEntity;
    }
}