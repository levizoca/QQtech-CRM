import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateSetorDto } from 'src/dto/create-setor.dto';
import { Setor } from 'src/entities/setor.entity';
import { SetorService } from 'src/services/setor.service';

@Controller('setor')
export class SetorController {
    constructor(private readonly colaboradorService: SetorService) { }

    @Post('/create')
    create(@Body() createColaboradorDto: CreateSetorDto): Promise<Setor> {
        return this.colaboradorService.create(createColaboradorDto);
    }

    @Get('/all')
    async findAll(): Promise<Setor[]> {
        return await this.colaboradorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Setor> {
        return this.colaboradorService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.colaboradorService.remove(id);
    }
}
