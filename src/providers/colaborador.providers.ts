import { DataSource } from 'typeorm';
import { Colaborador } from '../entities/colaborador.entity';

export const colaboradorProviders = [
    {
        provide: 'COLABORADOR_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Colaborador),
        inject: ['DATA_SOURCE'],
    },
];