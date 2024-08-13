import { ApiProperty } from "@nestjs/swagger";
import { IsObject, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateCompanyDto {
    @ApiProperty({
        example:'',
        required:true
    })
    @MaxLength(100)
    @MinLength(3)
    name: string;

    @ApiProperty({
        example:'',
    })
    @MaxLength(100)
    description:string;

    @ApiProperty({
        example:'',
    })
    @MaxLength(100)
    activity:string;

    @ApiProperty({
        example:'',
    })
    @MaxLength(100)
    address:string;

    @ApiProperty({
        example:'',
    })
    @MaxLength(100)
    phone:string;

    @ApiProperty({
        type:CreateUserDto,
        required:true
    })
    @IsObject()
    User:CreateUserDto;

}