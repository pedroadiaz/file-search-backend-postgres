import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DocumentEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { length: 1000 })
    pageContent: string;

    @Column({ type: "jsonb"})
    metadata: string;

    @Column("varchar", { length: 1000 })
    embedding: string;
}
