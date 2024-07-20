import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, MinLength } from "class-validator";

export class ResetPasswordDto {
    @ApiProperty()
    @IsNumber()
    Id:number;
    @ApiProperty()
    @MinLength(5)
    Password:string;
    @ApiProperty()
    @MinLength(5)
    NewPassword:string;
}