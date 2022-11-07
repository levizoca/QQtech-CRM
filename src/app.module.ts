import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './modules/colaborador.module';
import { SetorModule } from './modules/setor.module';
import { DocumentoModule } from './modules/documento.module';
import { AprovacaoModule } from './modules/aprovacao.module';
import { SetorEnvolvidoModule } from './modules/setorEnvolvido.module';
import { CrmModule } from './modules/crm.module';

@Module({
  imports: [
    AuthModule,
    ColaboradorModule,
    CrmModule,
    SetorModule,
    DocumentoModule,
    AprovacaoModule,
    SetorEnvolvidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
