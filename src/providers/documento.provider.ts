import { Documento } from 'src/entities/documento.entity';
import { DataSource } from 'typeorm';

export const documentoProviders = [
    {
        provide: 'DOCUMENTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Documento),
        inject: ['DATA_SOURCE'],
    },
];