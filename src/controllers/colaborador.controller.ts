import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateColaboradorDto } from 'src/dto/create-colaborador.dto';
import { Colaborador } from 'src/entities/colaborador.entity';
import { ColaboradorService } from 'src/services/colaborador.service';

@Controller('/colaborador')
export class ColaboradorController {
    constructor(private readonly colaboradorService: ColaboradorService) { }

    @Post('/create')
    create(@Body() createColaboradorDto: CreateColaboradorDto): Promise<Colaborador> {
        return this.colaboradorService.create(createColaboradorDto);
    }

    @Get('/all')
    async findAll(): Promise<Colaborador[]> {
        return await this.colaboradorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Colaborador> {
        return this.colaboradorService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.colaboradorService.remove(id);
    }

}