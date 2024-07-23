import { ApiProperty } from "@nestjs/swagger";
import { IsObject, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateCompanyDto {
    @ApiProperty()
    @MaxLength(100)
    @MinLength(3)
    name: string;

    @ApiProperty()
    @MaxLength(100)
    description:string;

    @ApiProperty()
    @MaxLength(100)
    activity:string;

    @ApiProperty()
    @MaxLength(100)
    address:string;

    @ApiProperty()
    @MaxLength(100)
    phone:string;

    @ApiProperty({
        type:CreateUserDto,
        required:true
    })
    @IsObject()
    User:CreateUserDto;

}