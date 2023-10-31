import { Document } from "langchain/dist/document";
export interface IVectorStoreService {
    saveData(docs: Document<Record<string, string>>[], indexName: string, classId: string): Promise<void>;
    queryIndex(indexName: string, classId: string, prompt: number[]): Promise<unknown>;
    deleteClassData(indexName: string, classId: string): Promise<boolean>;
}
