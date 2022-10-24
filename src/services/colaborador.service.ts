import { Injectable, Inject } from '@nestjs/common';
import { CreateColaboradorDto } from 'src/dto/create-colaborador.dto';
import { Repository } from 'typeorm';
import { Colaborador } from '../entities/colaborador.entity';

@Injectable()
export class ColaboradorService {
    constructor(
        @Inject('COLABORADOR_REPOSITORY')
        private ColaboradorService: Repository<Colaborador>,
    ) { }

    async findAll(): Promise<Colaborador[]> {
        return this.ColaboradorService.find();
    }

    create(CreateColaboradorDto: CreateColaboradorDto): Promise<Colaborador> {
        const colaborador = new Colaborador();
        colaborador.nome = CreateColaboradorDto.nome;
        colaborador.cpf = CreateColaboradorDto.cpf;
        colaborador.email = CreateColaboradorDto.email;
        colaborador.cargo = CreateColaboradorDto.cargo;
        colaborador.senha = CreateColaboradorDto.senha;

        return this.ColaboradorService.save(colaborador);
    }

    findOne(id: number): Promise<Colaborador> {
        return this.ColaboradorService.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.ColaboradorService.delete(id);
    }
}