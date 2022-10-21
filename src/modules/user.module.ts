import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../providers/user.providers';
import { UserService } from '../services/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UserController],
})
export class UserModule {}