import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/index')
  @Render('index')
  index(): any {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }
  abount(): any {
    const viewData = [];
    viewData['description'] = 'This is an abount page...';
    viewData['author'] = 'Developed by: NestJS';
    const data = 'Abount us-Online Store';
    return {
      title: data,
      subtitle: 'Abount us',
      viewData: viewData,
    };
  }
}
