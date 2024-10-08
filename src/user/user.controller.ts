import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ResetPasswordDto } from './dto/resetPasswordDto';
import { EmailDto } from './dto/req-email-user.dto';
import { MorganInterceptor } from 'nest-morgan';


@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseInterceptors(MorganInterceptor('combined'))
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('change/password')
  async changePassword(@Body() _email:EmailDto){
    const result = await this.userService.changePassword(_email.Email);
    console.log(result);
    return result;
  }

  @Post('reset/password')
  async resetPassword(@Body() resetPasswordDto:ResetPasswordDto){
    const result = await this.resetPassword(resetPasswordDto);
    return result;
  }

  @Post("checkExistingEmail")
  async checkExistingEmail(@Body() _email:EmailDto){
    const result = await this.userService.getEmail(_email.Email);
    return result;
  }

}