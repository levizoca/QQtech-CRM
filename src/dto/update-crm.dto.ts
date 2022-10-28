import { PartialType } from "@nestjs/mapped-types";
import { Aprovacao } from "src/entities/aprovacao.entity";
import { Colaborador } from "src/entities/colaborador.entity";
import { SetorEnvolvido } from "src/entities/setorEnvolvido.entity";
import { CreateCrmDto } from "./create-crm.dto";

export class UpdateCrmDto extends PartialType(CreateCrmDto) {
    numeroCadastro: string;
    descricao: string;
    objetivo: string;
    justificativa: string;
    complexidade: string;
    dataCriacao: string;
    versao: number;
    situacao: string;
    comportamentoOffline: string;
    dataFechamento: string;
    aprovacao: Aprovacao;
    colaborador: Colaborador;
    setoresEnvolvidos: SetorEnvolvido[];
}