import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { getByForeginKeyIdLambda } from '@libs/baseLambda';
import { ClassService } from '@services/class.service';
import { sleep } from 'openai/core';
import { formatJSONResponse } from '@libs/api-gateway';
import { dataSource, initializePostgres } from '@libs/postgres.config';

let successful: boolean | undefined = undefined;
initializePostgres().then(b => successful = b);

export const handler = async(event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    const userId = event.pathParameters?.userId;

    console.log("userId parameter is: ", userId);
    
    if (!userId) {
        return formatJSONResponse({
            message: `userId parameter must not be empty.`,
        },
        400); 
    } 

    while (typeof successful === "undefined") {
        console.log("here!");
        await sleep(10);
    }

    const service = new ClassService(dataSource);
    const result = await getByForeginKeyIdLambda(service, {
        where:{ 
            user: {
                id: userId
            }
        }
    });

    console.log("results: ", result);

    return result;
}