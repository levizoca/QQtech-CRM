import { Injectable, Inject } from '@nestjs/common';
import { CreateSetorDto } from 'src/dto/create-setor.dto';
import { Setor } from 'src/entities/setor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SetorService {
    constructor(
        @Inject('SETOR_REPOSITORY')
        private SetorService: Repository<Setor>,
    ) { }

    async findAll(): Promise<Setor[]> {
        return this.SetorService.find();
    }

    create(CreateSetorDto: CreateSetorDto): Promise<Setor> {
        const setor = new Setor();
        setor.nome = CreateSetorDto.nome;
        setor.descricao = CreateSetorDto.descricao;

        return this.SetorService.save(setor);
    }

    findOne(id: number): Promise<Setor> {
        return this.SetorService.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.SetorService.delete(id);
    }
}