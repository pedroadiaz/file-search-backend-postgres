import { TypeORMVectorStore } from "langchain/vectorstores/typeorm";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { IVectorStoreService } from "./interfaces/vectorStore.service.interface";
import { Document } from "langchain/dist/document";
import { options } from "@libs/postgres.config";

export class PostgresService implements IVectorStoreService {
    constructor() {

    }

    async queryIndex(classId: string, prompt: string, useFilter: boolean = false): Promise<unknown> {
        const embeddings = new OpenAIEmbeddings({
            openAIApiKey: process.env.OPENAI_API_KEY
        });

        const typeormVectorStore = await TypeORMVectorStore.fromDataSource(embeddings, {
            postgresConnectionOptions: options
        });

        console.log("classId: ", classId);

        const filter = useFilter ? {
            classId: classId.toString()
        } : undefined;

        console.log("filter: ", filter);

        const resultOne = await typeormVectorStore.similaritySearch(prompt, 5, filter);
        console.log(resultOne);

        return resultOne;
    }

    deleteClassData(classId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async saveData(docs: Document<Record<string, string>>[], indexId: string): Promise<void> {
        console.log("Save data entered: ");
        const embeddings = new OpenAIEmbeddings({
            openAIApiKey: process.env.OPENAI_API_KEY
        });

        const typeormVectorStore = await TypeORMVectorStore.fromDataSource(embeddings, {
            postgresConnectionOptions: options
        });

        await typeormVectorStore.ensureTableInDatabase();

        docs.map(doc => {
            doc.metadata["classId"] = indexId.toString()
        });

        const blah = await typeormVectorStore.addDocuments(
            docs
        );

        console.log("finished inserting: ", blah);
    }
    
}