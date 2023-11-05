import { IEntityRepo } from "@repos/entity-repo.interface";
import { BaseModel } from "@schemas/baseModel";
import { IService } from "./service.interface";

export abstract class AbstractService<T extends BaseModel> implements IService<T> {
    protected readonly repository: IEntityRepo<T>;
    constructor(repo: IEntityRepo<T>) {
        this.repository = repo;
    }

    public async getEntities() : Promise<T[]> {
        return this.repository.GetAll();
    }

    public async getEntityById(id: number) : Promise<T | null> {
        return this.repository.getEntityById(id);
    }

    public async queryEntities(query: Record<string, any>): Promise<T[]> {
        return this.repository.queryEntities(query);
    }

    public async deleteById(id: number): Promise<void> {
        return this.repository.deleteById(id);
    }

    public async updateById(entity: T): Promise<number> {
        return this.repository.updateById(entity, entity.id);
    }

    public async createEntity(entity: T): Promise<T> {
        if (!entity.createdDate) {
            entity.createdDate = new Date();
        }
        return this.repository.AddEntity(entity);
    }
}