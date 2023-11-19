import "reflect-metadata";
import { BookEntity } from '@schemas/book';
import { ClassEntity } from '@schemas/class';
import { FeedbackEntity } from '@schemas/feedback';
import { PromptEntity } from '@schemas/prompt';
import { UserEntity } from '@schemas/user';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Documents } from '@schemas/document';

export const options: DataSourceOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [BookEntity, ClassEntity, FeedbackEntity, PromptEntity, UserEntity],
    synchronize: true,
    ssl: true,
}

export const dataSource = new DataSource(options);

export const initializePostgres = async(): Promise<boolean> => {
    try {
        console.log("url:", process.env.PGHOST);
        await dataSource.initialize();
        console.log("Postres connected")
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}