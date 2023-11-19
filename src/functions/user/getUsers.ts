import "reflect-metadata";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { getLambda } from '@libs/baseLambda';
import { UserService } from '@services/user.service';
import { genericLambda } from '@libs/genericLambda';
import { dataSource } from '@libs/postgres.config';

export const handler = async(event: APIGatewayProxyEvent, context: Context) : Promise<APIGatewayProxyResult> => {
    return genericLambda(event, new UserService(dataSource), getLambda);
}