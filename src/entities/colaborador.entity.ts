import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Aprovacao } from './aprovacao.entity';
import { Crm } from './crm.entity';
import { Setor } from './setor.entity';

@Entity()
export class Colaborador extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    nome: string;

    @Column({ nullable: false, type: 'varchar', length: 11 })
    cpf: string;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    email: string;

    @Column({ nullable: false, type: 'varchar', length: 45 })
    cargo: string;

    @Column({ nullable: false, type: 'varchar', length: 45 })
    senha: string;

    @ManyToOne(type => Setor, setor => setor.colaboradores)
    @JoinColumn({ name: 'setor_idSetor', referencedColumnName: 'idSetor' })
    setor: Setor;

    @OneToMany(() => Aprovacao, (aprovacao) => aprovacao.colaborador)
    aprovacoes: Aprovacao[];

    @OneToMany(() => Crm, (crm) => crm.colaborador)
    crms: Crm[];
}