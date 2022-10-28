import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Colaborador } from './colaborador.entity';
import { SetorEnvolvido } from './setorEnvolvido.entity';

@Entity()
export class Setor extends BaseEntity {
    @PrimaryColumn({ nullable: false, type: 'varchar', length: 255 })
    nome: string;

    @Column({ nullable: false, type: 'text'})
    descricao: string;

    @OneToMany(() => Colaborador, (colaborador) => colaborador.setor)
    colaboradores: Colaborador[];
    
    @OneToMany(() => SetorEnvolvido, (setorEnvolvido) => setorEnvolvido.setor)
    setoresEnvolvidos: SetorEnvolvido[];
}