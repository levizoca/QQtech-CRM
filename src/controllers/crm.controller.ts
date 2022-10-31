import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Render } from '@nestjs/common';
import { CreateCrmDto } from 'src/dto/create-crm.dto';
import { UpdateCrmDto } from 'src/dto/update-crm.dto';
import { CrmService } from 'src/services/crm.service';
import { Crm } from 'src/entities/crm.entity';

@Controller('crm')
export class CrmController {
    constructor(private readonly crmService: CrmService) { }

    @Get('/home')
    @Render('home')
    async home() {
        const result = await this.crmService.findAll();
        return result ? { crm: result } : { crm: [] };
    }

    @Get('/visualizar/:numeroCadastro')
    @Render('visualizarCRM')
    visualizar(@Param('numeroCadastro', ParseIntPipe) numeroCadastro: string) {
        const result = this.crmService.findOne(numeroCadastro);
        return result ? { crm: result } : { crm: [numeroCadastro] };
    }
    
    @Post('/create')
    create(@Body() CreateCrmDto: CreateCrmDto): Promise<Crm> {
        return this.crmService.create(CreateCrmDto);
    }

    @Get('/all')
    async findAll(): Promise<Crm[]> {
        return await this.crmService.findAll();
    }

    @Get(':numeroCadastro')
    findOne(@Param('numeroCadastro', ParseIntPipe) numeroCadastro: string): Promise<Crm> {
        return this.crmService.findOne(numeroCadastro);
    }

    @Patch(':numeroCadastro')
    update(@Param('numeroCadastro') numeroCadastro: string, @Body() UpdateCrmDto: UpdateCrmDto) {
        return this.crmService.update(numeroCadastro, UpdateCrmDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.crmService.remove(id);
    }
}
