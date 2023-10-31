import { PromptRepo } from "@repos/prompt.repo";
import { IPrompt } from "@schemas/prompt";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class PromptService extends AbstractService<IPrompt> {
    constructor(protected dataSource: DataSource) {
        const repo = new PromptRepo(dataSource);

        super(repo);
    }
}