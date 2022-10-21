import { Controller, Get, Param, Query } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('all')
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }
}