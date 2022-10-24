import { DataSource } from 'typeorm';
import { Setor } from '../entities/setor.entity';

export const setorProviders = [
    {
        provide: 'SETOR_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Setor),
        inject: ['DATA_SOURCE'],
    },
];