import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsPhoneNumber, IsNumber, IsIn, IsEmpty, IsOptional, IsDate } from "class-validator";

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
    @IsOptional()
    @IsIn(['M','F'])
    sex: string;
  
    @ApiProperty()
    @IsDate()
    @IsOptional()
    date: string;
  
    @ApiProperty()
    @IsOptional()
    @MaxLength(100)
    @MinLength(3)
    nationality: string;
  
    @ApiProperty()
    @IsOptional()
    @IsNumber({maxDecimalPlaces:2})
    @MinLength(3)
    income: number;

    @ApiProperty()
    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status: number;

    
}