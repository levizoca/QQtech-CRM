import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';

@Entity()
export class Aprovacao extends BaseEntity {
    @PrimaryGeneratedColumn()
    idAprovacao: number;

    @Column({ nullable: false, type: 'text'})
    justificativa: string;

    @Column({ nullable: false, type: 'boolean'})
    aprovado: boolean[];

    @ManyToOne(type => Colaborador, colaborador => colaborador.aprovacoes)
    @JoinColumn({ name: 'colaborador_id', referencedColumnName: 'id' })
    colaborador: Colaborador;
}