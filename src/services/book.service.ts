import { BookRepo } from "@repos/book.repo";
import { IBook } from "@schemas/book";
import { DataSource } from 'typeorm';
import { AbstractService } from "./abstract.service";

export class BookService extends AbstractService<IBook> {
    constructor(protected dataSource: DataSource) {
        const repo = new BookRepo(dataSource);

        super(repo);
    }
}