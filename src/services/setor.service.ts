import { Injectable, Inject } from '@nestjs/common';
import { CreateSetorDto } from 'src/dto/create-setor.dto';
import { UpdateSetorDto } from 'src/dto/update-setor.dto';
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

    findOne(nome: string): Promise<Setor> {
        return this.SetorService.findOneBy({ nome: nome });
    }

    async update(nome: string, updateSetorDto: UpdateSetorDto) {
        const setor = await this.SetorService.findOneBy({nome});
        setor.nome = updateSetorDto.nome;
        setor.descricao = updateSetorDto.descricao;

        return this.SetorService.save(setor);
    }

    async remove(nome: string): Promise<void> {
        await this.SetorService.delete(nome);
    }
}