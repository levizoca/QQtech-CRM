import { Aprovacao } from 'src/entities/aprovacao.entity';
import { DataSource } from 'typeorm';

export const aprovacaoProviders = [
    {
        provide: 'APROVACAO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Aprovacao),
        inject: ['DATA_SOURCE'],
    },
];