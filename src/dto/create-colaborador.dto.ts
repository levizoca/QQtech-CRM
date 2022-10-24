import { Setor } from "src/entities/setor.entity";

export class CreateColaboradorDto {
  nome: string;
  email: string;
  cpf: string;
  cargo: string;
  senha: string;
  setor: Setor;
}