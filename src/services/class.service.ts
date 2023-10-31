import { ClassRepo } from "@repos/class.repo";
import { IClass } from "@schemas/class";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class ClassService extends AbstractService<IClass> {
    constructor(protected dataSource: DataSource) {
        const repo = new ClassRepo(dataSource);

        super(repo);
    }
}