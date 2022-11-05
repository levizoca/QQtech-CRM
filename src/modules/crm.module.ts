import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CrmController } from '../controllers/crm.controller';
import { crmProviders } from '../providers/crm.provider';
import { CrmService } from '../services/crm.service';
import { ColaboradorModule } from './colaborador.module';

@Module({
  imports: [DatabaseModule, ColaboradorModule],
  providers: [
    ...crmProviders,
    CrmService,
  ],
  controllers: [CrmController],
  exports: [CrmService],
})
export class CrmModule {}
