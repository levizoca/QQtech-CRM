import { DataSource } from 'typeorm';
import { Crm } from '../entities/crm.entity';

export const crmProviders = [
    {
        provide: 'CRM_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Crm),
        inject: ['DATA_SOURCE'],
    },
];