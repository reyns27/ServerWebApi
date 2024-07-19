import { AppService } from './app.service';
import { Controller, Get, Post, Body, Res, HttpException} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth/auth.service';
import { AuthDto } from './auth/dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiResponse } from './common/utils/ApiResponse';
import { AuthResponse } from './common/utils/AuthResponse';



@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  
  @ApiTags('auth')
  @Post('login')
  async login(@Body() params: AuthDto):Promise<ApiResponse<HttpException | AuthResponse>>{

    const result = await this.authService.loginWithCredentials(params);
   
    return new ApiResponse(true,200,["Authenticate success"], result);
  }
}