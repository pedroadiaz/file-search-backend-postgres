import { BookEntity } from '@schemas/book';
import { ClassEntity } from '@schemas/class';
import { FeedbackEntity } from '@schemas/feedback';
import { PromptEntity } from '@schemas/prompt';
import { UserEntity } from '@schemas/user';
import { DataSource, DataSourceOptions } from 'typeorm';
import "reflect-metadata";
import { Documents } from '@schemas/document';

export const options: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_URL,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_SCHEMA,
    entities: [BookEntity, ClassEntity, FeedbackEntity, PromptEntity, UserEntity, Documents],
    synchronize: true,
    ssl: true,
}

export const dataSource = new DataSource(options);

export const initializePostgres = async(): Promise<boolean> => {
    try {
        console.log("url:", process.env.POSTGRES_URL);
        await dataSource.initialize();
        console.log("Postres connected")
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}