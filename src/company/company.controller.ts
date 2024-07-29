import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { UpdateCompanyDto } from "./dto/update-company.dto";


@ApiTags('company')
@Controller('company')
export class CompanyController {
    constructor(private readonly _CompanyService:CompanyService){}

    @Post()
    create(@Body() _CreateCompanyDto: CreateCompanyDto){
        return this._CompanyService.create(_CreateCompanyDto);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(){
        return this._CompanyService.findAll();
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id:string){
        return this._CompanyService.findOne(+id);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id:string, @Body() _UpdateCompanyDto: UpdateCompanyDto){
        return this._CompanyService.update(+id,_UpdateCompanyDto);
    }
}


