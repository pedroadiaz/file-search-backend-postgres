import { FeedbackEntity } from "@schemas/feedback";
import { AbstractRepo } from "./abstract.repo";
import { DataSource } from 'typeorm';

export class FeedbackRepo extends AbstractRepo<FeedbackEntity> {
    constructor(protected dataSource: DataSource) {
        super(dataSource);
        this.toType = FeedbackEntity;
    }
}