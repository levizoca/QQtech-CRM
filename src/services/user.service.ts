import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.email = createUserDto.email;
        user.name = createUserDto.name;
        user.password = createUserDto.password;

        return this.userRepository.save(user);
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id: id });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}