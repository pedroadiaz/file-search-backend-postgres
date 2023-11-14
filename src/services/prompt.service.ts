import { PromptRepo } from "@repos/prompt.repo";
import { PromptEntity } from "@schemas/prompt";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class PromptService extends AbstractService<PromptEntity> {
    constructor(protected dataSource: DataSource) {
        const repo = new PromptRepo(dataSource);

        super(repo);
    }
}