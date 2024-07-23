import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength, IsEmail, IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  name?: string;

  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  @IsOptional()
  lastName?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  rolId?: number;

}
