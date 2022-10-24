import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
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
    @JoinColumn({ name: 'setor_nome', referencedColumnName: 'nome' })
    setor: Setor;
}