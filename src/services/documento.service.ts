import { Inject, Injectable } from '@nestjs/common';
import { Documento } from 'src/entities/documento.entity';
import { CreateDocumentoDto } from 'src/dto/create-documento.dto';
import { Repository } from 'typeorm';
import { UpdateDocumentoDto } from 'src/dto/update-documento.dto';

@Injectable()
export class DocumentoService {
    constructor(
        @Inject('DOCUMENTO_REPOSITORY')
        private DocumentoService: Repository<Documento>,
    ) { }

    async findAll(): Promise<Documento[]> {
        return this.DocumentoService.find();
    }

    create(CreateDocumentoDto: CreateDocumentoDto): Promise<Documento> {
        const documento = new Documento();
        documento.descricao = CreateDocumentoDto.descricao;
        documento.arquivo = CreateDocumentoDto.arquivo;

        return this.DocumentoService.save(documento);
    }

    findOne(idDocumento: number): Promise<Documento> {
        return this.DocumentoService.findOneBy({ idDocumento: idDocumento });
    }

    async update(idDocumento: number, updateDocumentoDto: UpdateDocumentoDto) {
        const documento = await this.DocumentoService.findOneBy({idDocumento});
        documento.descricao = updateDocumentoDto.descricao;
        documento.arquivo = updateDocumentoDto.arquivo;

        return this.DocumentoService.save(documento);
    }

    async remove(id: string): Promise<void> {
        await this.DocumentoService.delete(id);
    }
}
