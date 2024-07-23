import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(private readonly _CompanyService:CompanyService){}

    @Post()
    create(@Body() _CreateCompanyDto: CreateCompanyDto){
        return this._CompanyService.create(_CreateCompanyDto);
    }

    @Get()
    findAll(){
        return this._CompanyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this._CompanyService.findOne(+id);
    }
}


