import { Injectable, Inject } from '@nestjs/common';
import { CreateColaboradorDto } from 'src/dto/create-colaborador.dto';
import { UpdateColaboradorDto } from 'src/dto/update-colaborador.dto';
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
        colaborador.setor = CreateColaboradorDto.setor;

        return this.ColaboradorService.save(colaborador);
    }

    findOne(id: number): Promise<Colaborador> {
        return this.ColaboradorService.findOneBy({ id: id });
    }

    async update(id: number, updateColaboradorDto: UpdateColaboradorDto) {
        const colaborador = await this.ColaboradorService.findOneBy({id});
        colaborador.nome = updateColaboradorDto.nome;
        colaborador.cpf = updateColaboradorDto.cpf;
        colaborador.email = updateColaboradorDto.email;
        colaborador.cargo = updateColaboradorDto.cargo;
        colaborador.senha = updateColaboradorDto.senha;
        colaborador.setor = updateColaboradorDto.setor;

        return this.ColaboradorService.save(colaborador);
    }

    async remove(id: string): Promise<void> {
        await this.ColaboradorService.delete(id);
    }

    async findByEmail(email: string): Promise<Colaborador> {
        return this.ColaboradorService.findOneBy({ email: email });
    }
}