import { ClassRepo } from "@repos/class.repo";
import { ClassEntity } from "@schemas/class";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class ClassService extends AbstractService<ClassEntity> {
    constructor(protected dataSource: DataSource) {
        const repo = new ClassRepo(dataSource);

        super(repo);
    }
}