import { Module } from '@nestjs/common';
import { SetorController } from 'src/controllers/setor.controller';
import { DatabaseModule } from 'src/database/database.module';
import { setorProviders } from 'src/providers/setor.provider';
import { SetorService } from '../services/setor.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...setorProviders,
    SetorService,
  ],
  controllers: [SetorController],
  exports: [SetorService],
})
export class SetorModule {}
