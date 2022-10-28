import { Module } from '@nestjs/common';
import { SetorEnvolvidoController } from 'src/controllers/setorEnvolvido.controller';
import { DatabaseModule } from 'src/database/database.module';
import { setorEnvolvidoProviders } from 'src/providers/setorEnvolvido.provider';
import { SetorEnvolvidoService } from 'src/services/setorEnvolvido.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...setorEnvolvidoProviders,
    SetorEnvolvidoService,
  ],
  controllers: [SetorEnvolvidoController]
})
export class SetorEnvolvidoModule {}
