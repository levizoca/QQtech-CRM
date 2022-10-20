import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { User } from './users/user.entity';
import { UserRepository } from './users/user.repository';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'crm',
      entities: [User]}),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
