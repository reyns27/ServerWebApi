import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength, IsEmail, IsNumber } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

}
