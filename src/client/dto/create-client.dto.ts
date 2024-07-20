import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsNumber, isPhoneNumber, IsPhoneNumber, IsIn, IsOptional, IsDate } from "class-validator";

export class CreateClientDto{

  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  Name: string;

  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(5)
  direction: string;

  @ApiProperty()
  @IsPhoneNumber()
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



  


}