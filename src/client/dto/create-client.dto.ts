import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsNumber, isPhoneNumber, IsPhoneNumber, IsIn, IsOptional, IsDate, IsJSON, IsObject } from "class-validator";
import { referenceCLient } from "./reference-client.dto";


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
  @IsOptional()
  date: string;

  @ApiProperty()
  @IsOptional()
  @MaxLength(100)
  @MinLength(3)
  nationality: string;

  @ApiProperty()
  @IsOptional()
  income: number;

  @ApiProperty()
  @MinLength(8)
  identification_document: string;

  @ApiProperty()
  @IsOptional()
  identification_document_url:string;

  @ApiProperty()
  @IsOptional()
  @MinLength(3)
  home:string;

  @ApiProperty()
  @IsOptional()  
  @IsNumber()
  dependents:number;

  @ApiProperty()
  @IsOptional()   
  @MinLength(3) 
  academic_level:string;

  @ApiProperty({type:referenceCLient})
  @IsOptional()
  references: referenceCLient;

}