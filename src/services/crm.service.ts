import { Inject, Injectable } from '@nestjs/common';
import { CreateCrmDto } from 'src/dto/create-crm.dto';
import { UpdateCrmDto } from 'src/dto/update-crm.dto';
import { Crm } from 'src/entities/crm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CrmService {
    constructor(
        @Inject('CRM_REPOSITORY')
        private CrmService: Repository<Crm>,
    ) { }

    async findAll(): Promise<Crm[]> {
        return this.CrmService.find();
    }

    create(CreateCrmDto: CreateCrmDto): Promise<Crm> {
        const crm = new Crm();
        crm.numeroCadastro = CreateCrmDto.numeroCadastro;
        crm.descricao = CreateCrmDto.descricao;
        crm.objetivo = CreateCrmDto.objetivo;
        crm.justificativa = CreateCrmDto.justificativa;
        crm.complexidade = CreateCrmDto.complexidade;
        crm.dataCriacao = CreateCrmDto.dataCriacao;
        crm.versao = CreateCrmDto.versao;
        crm.situacao = CreateCrmDto.situacao;
        crm.comportamentoOffline = CreateCrmDto.comportamentoOffline;
        crm.colaborador = CreateCrmDto.colaborador;

        return this.CrmService.save(crm);
    }

    async findOne(numeroCadastro: string): Promise<Crm> {
        return this.CrmService.findOneBy({ numeroCadastro: numeroCadastro });
    }

    async update(numeroCadastro: string, UpdateCrmDto: UpdateCrmDto) {
        const crm = new Crm();
        crm.numeroCadastro = crm.numeroCadastro;
        crm.descricao = crm.descricao;
        crm.justificativa = crm.justificativa;
        crm.complexidade = crm.complexidade;
        crm.dataCriacao = crm.dataCriacao;
        crm.versao = crm.versao;
        crm.situacao = crm.situacao;
        crm.comportamentoOffline = crm.comportamentoOffline;
        crm.aprovacao = crm.aprovacao;
        crm.colaborador = crm.colaborador;
        crm.setoresEnvolvidos = crm.setoresEnvolvidos;

        return this.CrmService.save(crm);
    }

    async remove(numeroCadastro: string): Promise<void> {
        await this.CrmService.delete(numeroCadastro);
    }
}
