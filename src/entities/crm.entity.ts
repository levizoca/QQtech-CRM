import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Aprovacao } from './aprovacao.entity';
import { Colaborador } from './colaborador.entity';
import { SetorEnvolvido } from './setorEnvolvido.entity';

@Entity()
export class Crm extends BaseEntity {
    @PrimaryGeneratedColumn()
    numeroCadastro: string;

    @Column({ nullable: false, type: 'text'})
    descricao: string;

    @Column({ nullable: false, type: 'text'})
    objetivo: string;

    @Column({ nullable: false, type: 'text'})
    justificativa: string;

    @Column({ nullable: false, type: 'text'})
    complexidade: string;

    @Column({ nullable: true, type: 'date'})
    dataCriacao: string;

    @Column({ nullable: true, type: 'date'})
    dataFechamento: string;

    @Column({ nullable: false, type: 'integer'})
    versao: number;

    @Column({ nullable: false, type: 'varchar', length: 20})
    situacao: string;

    @Column({ nullable: true, type: 'text'})
    comportamentoOffline: string;
    
    @ManyToOne(type => Aprovacao, aprovacao => aprovacao.crms)
    @JoinColumn({ name: 'aprovacao_idAprovacao', referencedColumnName: 'idAprovacao' })
    aprovacao: Aprovacao;

    @ManyToOne(type => Colaborador, colaborador => colaborador.crms)
    @JoinColumn({ name: 'colaborador_id', referencedColumnName: 'id' })
    colaborador: Colaborador;

    @OneToMany(() => SetorEnvolvido, (setorEnvolvido) => setorEnvolvido.crm)
    setoresEnvolvidos: SetorEnvolvido[];
}