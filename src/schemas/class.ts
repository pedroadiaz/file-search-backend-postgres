import { BaseModel } from "./baseModel";
import { BookEntity } from "./book";
import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { PromptEntity } from "./prompt";
import { UserEntity } from "./user";

@Entity()
export class ClassEntity extends BaseModel {
    @ManyToOne(() => UserEntity, user => user.classes)
    user: UserEntity

    @Column("varchar", { length: 100 })
    name: string;

    @OneToMany(() => BookEntity, book => book.class)
    books: BookEntity[];

    @OneToMany(() => PromptEntity, prompt => prompt.class)
    prompts: PromptEntity[];
}
