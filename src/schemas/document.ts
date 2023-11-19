import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Documents {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column("varchar", { length: 1000 })
    pageContent: string;

    @Column({ type: "jsonb"})
    metadata: Record<string, any>;

    @Column({ name: "embedding", nullable: false, type: "varchar" })
    embedding: string;
}
