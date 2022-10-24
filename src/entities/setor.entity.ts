import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Entity()
export class Setor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    nome: string;

    @Column({ nullable: false, type: 'text'})
    descricao: string;

    @OneToMany(type => Colaborador, colaborador => colaborador.setor)
    colaboradores: Colaborador[];
}