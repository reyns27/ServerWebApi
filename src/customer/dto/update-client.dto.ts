import { ApiProperty } from "@nestjs/swagger";
import { MinLength, MaxLength, IsEmail, IsPhoneNumber, IsNumber, IsIn, IsEmpty, IsOptional, IsDate, IsJSON, IsObject } from "class-validator";
import { referenceCLient } from "./reference-client.dto";



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
    @MinLength(3)
    income: number;

    @ApiProperty()
    @MinLength(8)
    @IsOptional()
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
    @IsObject()
    references: referenceCLient;

    @ApiProperty()
    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status: number;

    
}

