import { UserRepo } from "@repos/user.repo";
import { UserEntity } from "@schemas/user";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class UserService extends AbstractService<UserEntity> {
    constructor(protected dataSource: DataSource) {
        const repo = new UserRepo(dataSource);

        super(repo);
    }
}