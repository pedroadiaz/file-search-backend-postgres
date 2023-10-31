import { BaseModel } from "./baseModel";
import { BookEntity, IBook } from "./book";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { IPrompt, PromptEntity } from "./prompt";
import { UserEntity } from "./user";

export interface IClass extends BaseModel {
    name: string
    books?: IBook[];
    savedPrompts?: IPrompt[];
}

@Entity()
export class ClassEntity implements IClass {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserEntity, user => user.classes)
    user: UserEntity

    @Column()
    name: string;

    @OneToMany(() => BookEntity, book => book.class)
    books: BookEntity[]

    @OneToMany(() => PromptEntity, prompt => prompt.class)
    prompts: PromptEntity[]

    @Column()
    active: boolean;

    @Column()
    createdDate: Date;
}
