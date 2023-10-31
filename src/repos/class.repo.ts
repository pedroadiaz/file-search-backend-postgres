import { ClassEntity, IClass } from "@schemas/class";
import { DataSource } from 'typeorm';
import { AbstractRepo } from "./abstract.repo";

export class ClassRepo extends AbstractRepo<ClassEntity> {
    constructor(protected dataSource: DataSource) {
        super(dataSource);
        this.toType = ClassEntity;
    }
}