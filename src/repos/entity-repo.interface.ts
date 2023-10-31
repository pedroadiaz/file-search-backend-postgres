import { BaseModel } from "@schemas/baseModel";

export interface IEntityRepo<T extends BaseModel> {
    AddEntity(entity: T): Promise<void>;
    GetAll(): Promise<T[]>;
    getEntityById(id: number): Promise<T | null>;
    queryEntities(query: Record<string, any>): Promise<T[]>;
    deleteById(id: number): Promise<void>;
    updateById(entity: T, id: number): Promise<number>;
}