import { Colaborador } from "src/entities/colaborador.entity";

export class CreateCrmDto {
    numeroCadastro: string;
    descricao: string;
    objetivo: string;
    justificativa: string;
    complexidade: string;
    dataCriacao: string;
    versao: number;
    situacao: string;
    comportamentoOffline: string;
    //dataFechamento: string;
    //aprovacao: Aprovacao;
    colaborador: Colaborador;
    //setoresEnvolvidos: SetorEnvolvido[];
}