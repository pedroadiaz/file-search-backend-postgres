import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { deleteByIdLambda } from '@libs/baseLambda';
import { genericLambda } from '@libs/genericLambda';
import { ClassService } from '@services/class.service';
import { dataSource } from '@libs/postgres.config';

export const handler = async(event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    return genericLambda(event, new ClassService(dataSource), deleteByIdLambda);
}