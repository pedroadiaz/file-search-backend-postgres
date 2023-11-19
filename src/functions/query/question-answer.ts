import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { PostgresService } from "@services/postgres.service";
import { formatJSONResponse } from '@libs/api-gateway';
import { ChatBedrock } from "langchain/chat_models/bedrock";
import { RetrievalQAChain } from "langchain/chains"

export const handler = async (event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> =>  {
    const body = JSON.parse(event.body);
    const service = new PostgresService();
    const vectorStoreRetriever = await service.getVectorStore(body.classId);

    const model = new ChatBedrock({
        model: "anthropic.claude-v2",
        region: "us-west-2"
      });
    

    console.log("retriever: ", vectorStoreRetriever);

    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    
    const response = await chain.call({
        query: body.prompt
    });
    
    return formatJSONResponse({
        results: response
    }, 200);
}