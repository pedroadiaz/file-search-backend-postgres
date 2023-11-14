import { BookRepo } from "@repos/book.repo";
import { BookEntity } from "@schemas/book";
import { DataSource } from 'typeorm';
import { AbstractService } from "./abstract.service";

export class BookService extends AbstractService<BookEntity> {
    constructor(protected dataSource: DataSource) {
        const repo = new BookRepo(dataSource);

        super(repo);
    }
}