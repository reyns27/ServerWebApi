import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNumber, IsOptional, MaxLength, MinLength } from "class-validator";
import { ActivityCompany } from "./activity-company.dto";

export class UpdateCompanyDto {
    @ApiProperty()
    @MaxLength(100)
    @MinLength(3)
    @IsOptional()
    name: string;

    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    description:string;

    @ApiProperty({type:ActivityCompany})
    @IsOptional()
    activities: ActivityCompany;

    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    address:string;

    @ApiProperty()
    @MaxLength(100)
    @IsOptional()
    phone:string;

    @ApiProperty()
    @IsNumber()
    @IsIn([0,1])
    @IsOptional()
    status:number;

}
