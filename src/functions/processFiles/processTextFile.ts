import { Context, S3Event } from "aws-lambda";
import { S3TextLoader } from "../../services/s3-text.service";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PostgresService } from "@services/postgres.service";

export const handler = async (event: S3Event, context: Context) => {
    await Promise.all(event.Records.map(async (rec) => {
        const bucket = rec.s3.bucket.name;
        const key = rec.s3.object.key;

        const indexId = key.split("/")?.[0];

        const loader = new S3TextLoader({
            bucket: bucket,
            key: key, 
            unstructuredAPIURL: "",
            unstructuredAPIKey: "",
        });

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 0
        });

        const doc = await loader.loadAndSplit(splitter);
        try {
            console.log("number of documents: ", doc.length);
            const max = doc.length < 20 ? doc.length : 20;
            if (doc.length > 0) {
                for (let i=0;i<max;i++) {
                    console.log(`content for index ${i}`, doc[i]?.pageContent);
                }
            }
        } catch (error) {
            console.log(error);
        }


        const service = new PostgresService();

        await service.saveData(doc, indexId);
    }));
}