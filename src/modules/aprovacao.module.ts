import { Module } from '@nestjs/common';
import { AprovacaoController } from 'src/controllers/aprovacao.controller';
import { DatabaseModule } from 'src/database/database.module';
import { aprovacaoProviders } from 'src/providers/aprovacao.provider';
import { AprovacaoService } from 'src/services/aprovacao.service';


@Module({
  imports: [DatabaseModule],
  providers: [
    ...aprovacaoProviders,
    AprovacaoService,
  ],
  controllers: [AprovacaoController]
})
export class AprovacaoModule {}
