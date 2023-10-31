import { FindOptionsWhere, ObjectLiteral } from "typeorm";
import { DataSource } from 'typeorm'
import { IEntityRepo } from "./entity-repo.interface";
import { BaseModel } from "@schemas/baseModel";

export abstract class AbstractRepo<T extends BaseModel & ObjectLiteral> implements IEntityRepo<T> {
    protected toType: { new(): T };
    
    constructor(protected dataSource: DataSource) {
    }

    async getEntityById(id: number): Promise<T> {
        const repo = this.dataSource.getRepository(this.toType);
        const options: FindOptionsWhere<T> = {
            id: id
        }as FindOptionsWhere<T>;
        return repo.findOneBy(options)
    }

    async queryEntities(query: Record<string, any>): Promise<T[]> {
        const repo = this.dataSource.getRepository(this.toType);
        const options: FindOptionsWhere<T> = query as FindOptionsWhere<T>;
        return repo.findBy(options);
    }

    async deleteById(id: number): Promise<void> {
        const repo = this.dataSource.getRepository(this.toType);
        repo.delete({ id: id } as FindOptionsWhere<T>);

        return;
    }

    async updateById(entity: T, id: number): Promise<number> {
        const repo = this.dataSource.getRepository(this.toType);
        const result = await repo.update({ id: id } as FindOptionsWhere<T>, entity);

        return result.affected;
    }

    async AddEntity(entity: T): Promise<void> {
        const repository = this.dataSource.getRepository(this.toType);
        repository.save(entity);
    }

    async GetAll(): Promise<T[]> {
        const repository = this.dataSource.getRepository(this.toType);
        return repository.find({});
    }
}