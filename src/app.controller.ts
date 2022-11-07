import { Controller, Get, Render, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';


import { SetorService } from './services/setor.service';
import { JwtAuthGuard } from './auth/shared/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private setorService: SetorService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('/login')
  @Render('login')
  loginGet() {
    return { message: 'Hello world!' };
  }

  @Get('/cadastro/colaborador')
  @Render('cadastroColaborador')
  cadastroColaborador() {
    return this.setorService
      .findAll()
      .then((result) => result ? { setor: result } : { setor: [] });
  }

  @Get('/cadastro/crm')
  @Render('cadastroCRM')
  cadastroCRM() {
    return this.setorService
      .findAll()
      .then((result) => result ? { setor: result } : { setor: [] });
  }

  @Get('/atualizar/crm')
  @Render('atualizarCRM')
  atualizarCRM() {
    return { message: 'Hello world!' };
  }
}
