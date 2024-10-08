import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {

  @ApiProperty({
    required:true
  })
  companyId:number;
  
  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  userName: string;

  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  name?: string;

  @ApiProperty()
  @MinLength(2)
  @MaxLength(40)
  lastName?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @MinLength(5)
  password?: string;

  @ApiProperty()
  @IsNumber()
  rolId?: number;

  status?: number;
}
