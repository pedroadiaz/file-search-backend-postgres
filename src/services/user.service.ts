import { UserRepo } from "@repos/user.repo";
import { IUser } from "@schemas/user";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class UserService extends AbstractService<IUser> {
    constructor(protected dataSource: DataSource) {
        const repo = new UserRepo(dataSource);

        super(repo);
    }
}