import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  @Render('login')
  login() {
    return { message: 'Hello world!' };
  }

  @Get('/home')
  @Render('home')
  home() {
    return { message: 'Hello world!' };
  }

  @Get('/cadastroColab')
  @Render('cadastroColab')
  cadastroColab() {
    return { message: 'Hello world!' };
  }

  @Get('/cadastroCRM')
  @Render('cadastroCRM')
  cadastroCRM() {
    return { message: 'Hello world!' };
  }

  @Get('/crmView')
  @Render('crmView')
  crmView() {
    return { message: 'Hello world!' };
  }

  @Get('/atualizarCRM')
  @Render('atualizarCRM')
  atualizarCRM() {
    return { message: 'Hello world!' };
  }
}
