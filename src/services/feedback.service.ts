import { FeedbackRepo } from "@repos/feedback.repo";
import { FeedbackEntity } from "@schemas/feedback";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class FeedbackService extends AbstractService<FeedbackEntity> {
    constructor(protected dataSource: DataSource) {
        const repo = new FeedbackRepo(dataSource);

        super(repo);
    }
}