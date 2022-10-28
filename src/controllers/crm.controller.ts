import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateCrmDto } from 'src/dto/create-crm.dto';
import { UpdateCrmDto } from 'src/dto/update-crm.dto';
import { CrmService } from 'src/services/crm.service';
import { Crm } from 'src/entities/crm.entity';

@Controller('crm')
export class CrmController {
    constructor(private readonly crmService: CrmService) { }

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
