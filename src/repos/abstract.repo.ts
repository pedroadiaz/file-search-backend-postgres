import { FindManyOptions, FindOptionsWhere, ObjectLiteral } from "typeorm";
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
        const options: FindManyOptions<T> = query as FindManyOptions<T>;
        console.log("options: ", options);
        return repo.find(options);
    }

    async deleteById(id: number): Promise<void> {
        const repo = this.dataSource.getRepository(this.toType);
        await repo.delete({ id: id } as FindOptionsWhere<T>);

        return;
    }

    async updateById(entity: T, id: number): Promise<number> {
        const repo = this.dataSource.getRepository(this.toType);
        const result = await repo.update({ id: id } as FindOptionsWhere<T>, entity);

        return result.affected;
    }

    async AddEntity(entity: T): Promise<T> {
        const repository = this.dataSource.getRepository(this.toType);
        const created = await repository.save(entity);
        return created;
    }

    async GetAll(): Promise<T[]> {
        const repository = this.dataSource.getRepository(this.toType);
        return repository.find({});
    }
}