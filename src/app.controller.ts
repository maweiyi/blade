import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  index(): any {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }
  @Get('/about')
  @Render('about')
  abount(): any {
    const viewData = [];
    viewData['title'] = 'Abount us - Online Store';
    viewData['subtitle'] = 'Abount us';
    viewData['description'] = 'This is an abount page...';
    viewData['author'] = 'Developed by: NestJS';
    return {
      viewData: viewData,
    };
  }
}
