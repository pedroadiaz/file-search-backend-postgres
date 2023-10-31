import { PromptEntity, IPrompt } from "@schemas/prompt";
import { AbstractRepo } from "./abstract.repo";
import { DataSource } from 'typeorm';

export class PromptRepo extends AbstractRepo<PromptEntity> {
    constructor(protected dataSource: DataSource) {
        super(dataSource);
        this.toType = PromptEntity;
    }
}