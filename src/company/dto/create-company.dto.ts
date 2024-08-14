import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsObject, MaxLength, MinLength } from "class-validator";


export class UserCompanyDto {
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

}

export class CreateCompanyDto {
    @ApiProperty({
        example: '',
        required: true
    })
    @MaxLength(100)
    @MinLength(3)
    name: string;

    @ApiProperty({
        example: '',
    })
    @MaxLength(100)
    description: string;

    @ApiProperty({
        example: '',
    })
    @MaxLength(100)
    address: string;

    @ApiProperty({
        example: '',
    })
    @MaxLength(100)
    phone: string;

    @ApiProperty({
        type: UserCompanyDto,
        required: true
    })
    @IsObject()
    User: UserCompanyDto;

}


