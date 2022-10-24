import { Module } from '@nestjs/common';
import { ColaboradorController } from 'src/controllers/colaborador.controller';
import { DatabaseModule } from '../database/database.module';
import { colaboradorProviders } from '../providers/colaborador.providers';
import { ColaboradorService } from '../services/colaborador.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...colaboradorProviders,
    ColaboradorService,
  ],
  controllers: [ColaboradorController],
})
export class ColaboradorModule {}