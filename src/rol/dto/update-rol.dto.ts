import { PartialType } from '@nestjs/mapped-types';
import { CreateRolDto } from './create-rol.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateRolDto extends PartialType(CreateRolDto) {
    @ApiProperty()
    @MaxLength(50)
    @MinLength(2)
    @IsOptional()
    Name: string;
  
    @MaxLength(100)
    @ApiProperty()
    @IsOptional()
    Description: string;
    @ApiProperty()
    @IsOptional()
    @IsIn([0,1])
    status: number;
}
