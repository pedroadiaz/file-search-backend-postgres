import { BaseModel } from "@schemas/baseModel";

export interface IService<T extends BaseModel> {
    getEntities(): Promise<T[]>;
    getEntityById(id: number) : Promise<T | null>;
    queryEntities(query: Record<string, any>): Promise<T[]>;
    deleteById(id: number): Promise<void>;
    updateById(entity: T): Promise<number>;
    createEntity(entity: T): Promise<T>;
}