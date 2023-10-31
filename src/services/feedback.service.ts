import { FeedbackRepo } from "@repos/feedback.repo";
import { IFeedback } from "@schemas/feedback";
import { AbstractService } from "./abstract.service";
import { DataSource } from 'typeorm';

export class FeedbackService extends AbstractService<IFeedback> {
    constructor(protected dataSource: DataSource) {
        const repo = new FeedbackRepo(dataSource);

        super(repo);
    }
}