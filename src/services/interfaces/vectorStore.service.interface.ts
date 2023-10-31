import { Document } from "langchain/dist/document";

export interface IVectorStoreService {
    saveData(docs: Document<Record<string, string>>[], classId: string): Promise<void>;
    queryIndex(classId: string, prompt: string): Promise<unknown>;
    deleteClassData(classId: string) : Promise<boolean>;
}