import { PartialType } from '@nestjs/mapped-types';
import { Setor } from 'src/entities/setor.entity';
import { CreateColaboradorDto } from './create-colaborador.dto';

export class UpdateColaboradorDto extends PartialType(CreateColaboradorDto) {
    nome: string;
    cpf: string;
    email: string;
    cargo: string;
    senha: string;
    setor: Setor;
}
