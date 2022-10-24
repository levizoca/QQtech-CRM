import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './modules/colaborador.module';

@Module({
  imports: [ColaboradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
