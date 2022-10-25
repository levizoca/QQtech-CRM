import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { documentoProviders } from 'src/providers/documento.provider';
import { DocumentoService } from 'src/services/documento.service';
import { DocumentoController } from '../controllers/documento.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...documentoProviders,
    DocumentoService,
  ],
  controllers: [DocumentoController]
})
export class DocumentoModule {}
