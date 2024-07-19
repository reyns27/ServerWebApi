import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsNumber, isPhoneNumber, IsPhoneNumber } from "class-validator";

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


}