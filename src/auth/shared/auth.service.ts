import { Injectable } from '@nestjs/common';
import { ColaboradorService } from 'src/services/colaborador.service';

@Injectable()
export class AuthService {
    jwtService: any;

    constructor(private colaboradorService: ColaboradorService) {}

    async validateColaborador(email: string, senha: string): Promise<any> {
        const colaborador = await this.colaboradorService.findByEmail(email);
        if (colaborador && colaborador.senha === senha) {
            const { senha, ...result } = colaborador;
            return result;
        }
        return null;
    }

    async login(colaborador: any) {
        const payload = { email: colaborador.email, sub: colaborador.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
