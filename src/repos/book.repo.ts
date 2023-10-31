import { BookEntity } from "@schemas/book";
import { DataSource } from 'typeorm';
import { AbstractRepo } from "./abstract.repo";

export class BookRepo extends AbstractRepo<BookEntity> {
    constructor(protected dataSource: DataSource) {
        super(dataSource);
        this.toType = BookEntity;
    }
}