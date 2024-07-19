import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from './create-rol.dto';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class UpdateRolDto extends PartialType(CreateRolDto) {
    @ApiProperty()
    @MaxLength(50)
    @MinLength(2)
    Name: string;
  
    @MaxLength(100)
    @ApiProperty()
    Description: string;
    @ApiProperty()
    status: number;
}
