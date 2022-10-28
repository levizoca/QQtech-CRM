import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Documento } from 'src/entities/documento.entity';
import { DocumentoService } from 'src/services/documento.service';
import { CreateDocumentoDto } from 'src/dto/create-documento.dto';
import { UpdateDocumentoDto } from 'src/dto/update-documento.dto';

@Controller('documento')
export class DocumentoController {
    constructor(private readonly documentoService: DocumentoService) { }

    @Post('/create')
    create(@Body() CreateDocumentoDto: CreateDocumentoDto): Promise<Documento> {
        return this.documentoService.create(CreateDocumentoDto);
    }

    @Get('/all')
    async findAll(): Promise<Documento[]> {
        return await this.documentoService.findAll();
    }

    @Get(':idDocumento')
    findOne(@Param('idDocumento', ParseIntPipe) id: number): Promise<Documento> {
        return this.documentoService.findOne(id);
    }

    @Patch(':idDocumento')
    update(@Param('idDocumento') id: number, @Body() UpdateDocumentoDto: UpdateDocumentoDto) {
        return this.documentoService.update(id, UpdateDocumentoDto);
    }

    @Delete(':idDocumento')
    remove(@Param('idDocumento') id: string): Promise<void> {
        return this.documentoService.remove(id);
    }
}
