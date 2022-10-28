import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Crm } from './crm.entity';
import { Setor } from './setor.entity';

@Entity()
export class SetorEnvolvido extends BaseEntity {
    @PrimaryColumn({ type: 'varchar', name: 'crm_numeroCadastro' })
    @ManyToOne(type => Crm, crm => crm.setoresEnvolvidos)
    @JoinColumn({ name: 'crm_numeroCadastro', referencedColumnName: 'numeroCadastro' })
    crm: Crm;

    @PrimaryColumn({ type: 'varchar', name: 'setor_nomeSetor' })
    @ManyToOne(type => Setor, setor => setor.setoresEnvolvidos)
    @JoinColumn({ name: 'setor_nomeSetor', referencedColumnName: 'nome' })
    setor: Setor;

    @Column({ nullable: false, type: 'varchar', length: 6})
    matriculaColaborador: string;
}