import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Documento extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDocumento: number;

    @Column({ nullable: true, type: 'text'})
    descricao: string;

    @Column({ nullable: false, type: 'bytea'})
    arquivo: object[];
}