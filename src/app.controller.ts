import { Controller, Get, Render, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

import { SetorService } from './services/setor.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private setorService: SetorService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

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
