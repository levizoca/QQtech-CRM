import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './modules/colaborador.module';
import { SetorModule } from './modules/setor.module';

@Module({
  imports: [ColaboradorModule, SetorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
