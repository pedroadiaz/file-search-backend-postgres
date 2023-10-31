import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { getByForeginKeyIdLambda } from '@libs/baseLambda';
import { dataSource, initializePostgres } from '@libs/postgres.config';
import { PromptService } from '@services/prompt.service';
import { sleep } from 'openai/core';
import { formatJSONResponse } from '@libs/api-gateway';

let successful: boolean | undefined = undefined;
initializePostgres().then(b => successful = b);

export const handler = async(event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    const classId = event.queryStringParameters?.classId;
    
    if (!classId) {
        return formatJSONResponse({
            message: `Email parameter must not be empty.`,
        },
        400); 
    } 

    while (typeof successful === "undefined") {
        console.log("here!");
        await sleep(10);
    }

    const service = new PromptService(dataSource);
    const result = await getByForeginKeyIdLambda(service, {
        classId: classId
    });

    return result;
}