import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsPhoneNumber, IsNumber, IsIn, IsEmpty, IsOptional } from "class-validator";

export class UpdateClientDto {
    @ApiProperty()
    @MinLength(2)
    @MaxLength(40)
    @IsOptional()
    Name: string;
  
    @ApiProperty()
    @MinLength(2)
    @MaxLength(40)
    @IsOptional()
    lastName: string;
  
    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email: string;
  
    @ApiProperty()
    @MinLength(5)
    @IsOptional()
    direction: string;
  
    @ApiProperty()
    @IsPhoneNumber()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status: number;

    
}