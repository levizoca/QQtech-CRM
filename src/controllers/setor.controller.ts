import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateSetorDto } from 'src/dto/create-setor.dto';
import { UpdateSetorDto } from 'src/dto/update-setor.dto';
import { Setor } from 'src/entities/setor.entity';
import { SetorService } from 'src/services/setor.service';

@Controller('setor')
export class SetorController {
    constructor(private readonly setorService: SetorService) { }
    
    @Post('/create')
    create(@Body() createSetorDto: CreateSetorDto): Promise<Setor> {
        return this.setorService.create(createSetorDto);
    }

    @Get('/all')
    async findAll(): Promise<Setor[]> {
        return await this.setorService.findAll();
    }

    @Get(':idSetor')
    findOne(@Param('idSetor', ParseIntPipe) idSetor: number): Promise<Setor> {
        return this.setorService.findOne(idSetor);
    }

    @Patch(':idSetor')
    update(@Param('idSetor') idSetor: number, @Body() updateSetorDto: UpdateSetorDto) {
        return this.setorService.update(idSetor, updateSetorDto);
    }

    @Delete(':idSetor')
    remove(@Param('idSetor') idSetor: number): Promise<void> {
        return this.setorService.remove(idSetor);
    }
}
