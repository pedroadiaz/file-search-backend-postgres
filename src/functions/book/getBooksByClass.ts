import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { getByForeginKeyIdLambda } from '@libs/baseLambda';
import { BookService } from '@services/book.service';
import { sleep } from 'openai/core';
import { formatJSONResponse } from '@libs/api-gateway';
import { dataSource, initializePostgres } from '@libs/postgres.config';

let successful: boolean | undefined = undefined;
initializePostgres().then(b => successful = b);

export const handler = async(event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    const classId = event.queryStringParameters?.classId;
    
    if (!classId) {
        return formatJSONResponse({
            message: `classId parameter must not be empty.`,
        },
        400); 
    } 

    while (typeof successful === "undefined") {
        console.log("here!");
        await sleep(10);
    }

    const service = new BookService(dataSource);
    const result = await getByForeginKeyIdLambda(service, {
        classId: classId
    });

    return result;
}