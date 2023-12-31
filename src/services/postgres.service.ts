// import { TypeORMVectorStore } from "langchain/vectorstores/typeorm";
import "reflect-metadata";
import { TypeORMVectorStore } from "@libs/typeorm.vectorstore";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { BedrockEmbeddings } from "langchain/embeddings/bedrock";
import { IVectorStoreService } from "./interfaces/vectorStore.service.interface";
import { Document } from "langchain/document";
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

        const filter = {
            classId: classId.toString()
        };

        console.log("filter: ", filter);

        const resultOne = await typeormVectorStore.similaritySearch(prompt, 5, filter);
        console.log(resultOne);

        return resultOne;
    }

    async getVectorStore(classId: number) {
        const embeddings = new OpenAIEmbeddings({
            openAIApiKey: process.env.OPENAI_API_KEY
        });

        const typeormVectorStore = await TypeORMVectorStore.fromDataSource(embeddings, {
            postgresConnectionOptions: options,
            filter: {
                classId: classId
            }
        });

        return typeormVectorStore.asRetriever(3);
    }

    deleteClassData(classId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async saveData(docs: Document<Record<string, string>>[], indexId: string): Promise<void> {
        console.log("Save data entered: ");

        // const embeddings = new BedrockEmbeddings({
        //     region: process.env.BEDROCK_REGION,
        //     model: process.env.BEDROCK_EMBEDDINGS_MODEL,
        //     maxRetries: 1,
        //     maxConcurrency: 2
        // });
        const embeddings = new OpenAIEmbeddings({
            openAIApiKey: process.env.OPENAI_API_KEY
        });

        const typeormVectorStore = await TypeORMVectorStore.fromDataSource(embeddings, {
            postgresConnectionOptions: options
        });

        docs.map(doc => {
            doc.metadata["classId"] = indexId.toString();
        });

        const blah = await typeormVectorStore.addDocuments(
            docs
        );

        console.log("finished inserting: ", blah);
    }
    
}