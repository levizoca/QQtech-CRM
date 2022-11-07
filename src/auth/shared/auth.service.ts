import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ColaboradorService } from 'src/services/colaborador.service';

@Injectable()
export class AuthService {
    constructor(
        private colaboradorService: ColaboradorService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, senha: string): Promise<any> {
        const user = await this.colaboradorService.findByEmail(email);
        if (user && user.senha === senha) {
            const { senha, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}
