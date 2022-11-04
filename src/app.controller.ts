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

  @Get('/cadastro/colaborador')
  @Render('cadastroColaborador')
  cadastroColaborador() {
    return { message: 'Hello world!' };
  }

  @Get('/cadastro/crm')
  @Render('cadastroCRM')
  cadastroCRM() {
    return { message: 'Hello world!' };
  }

  @Get('/visualizar/crm')
  @Render('visualizarCRM')
  crmView() {
    return { message: 'Hello world!' };
  }

  @Get('/atualizar/crm')
  @Render('atualizarCRM')
  atualizarCRM() {
    return { message: 'Hello world!' };
  }
}
