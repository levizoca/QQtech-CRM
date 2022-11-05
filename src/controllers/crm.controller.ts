import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Render } from '@nestjs/common';
import { CreateCrmDto } from 'src/dto/create-crm.dto';
import { UpdateCrmDto } from 'src/dto/update-crm.dto';
import { CrmService } from 'src/services/crm.service';
import { Crm } from 'src/entities/crm.entity';
import { ColaboradorService } from 'src/services/colaborador.service';

@Controller('crm')
export class CrmController {
    constructor(private readonly crmService: CrmService, 
                private readonly colaboradorService: ColaboradorService
            ) { }

    @Get('/home')
    @Render('home')
    async home() {
        return await this.crmService
                            .findAll()
                            .then((result) => result ? { crm: result } : { crm: [] });
    }

    @Get('/visualizar/:numeroCadastro')
    @Render('visualizarCRM')
    async visualizar(@Param('numeroCadastro') numeroCadastro: string) {
        const crm = await this.crmService.findOne(numeroCadastro);
        return crm ? { crm: crm } : { crm: [] };
    }

    @Get('/atualizar/:numeroCadastro')
    @Render('atualizarCRM')
    async atualizar(@Param('numeroCadastro') numeroCadastro: string) {
        const crm = await this.crmService.findOne(numeroCadastro);
        return crm ? { crm: crm } : { crm: [] };
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
    findOne(@Param('numeroCadastro') numeroCadastro): Promise<Crm> {
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
