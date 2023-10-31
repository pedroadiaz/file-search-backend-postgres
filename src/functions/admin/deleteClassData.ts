import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { PostgresService } from "@services/postgres.service";

export const handler = async (event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> =>  {
    const classId = event.queryStringParameters?.classId;
    const service = new PostgresService();

    const result = await service.deleteClassData(classId);

    return formatJSONResponse({
        results: result
    }, 200);
}