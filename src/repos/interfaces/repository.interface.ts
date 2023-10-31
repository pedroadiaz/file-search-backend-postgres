export interface IRepository<T> {
    AddEntity(entity: T): Promise<void>;
    GetAll(): Promise<T[]>;
    getEntityById(id: number): Promise<T | null>;
    queryEntities(query: Record<string, any>): Promise<T[]>;
    deleteById(id: number): Promise<void>;
    updateById(entity: T, id: number): Promise<number>;
}