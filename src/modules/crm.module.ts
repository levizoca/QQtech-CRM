import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CrmController } from '../controllers/crm.controller';
import { crmProviders } from '../providers/crm.provider';
import { CrmService } from '../services/crm.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...crmProviders,
    CrmService,
  ],
  controllers: [CrmController]
})
export class CrmModule {}
