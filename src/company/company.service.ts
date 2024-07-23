import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "./entity/company.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>,
                private readonly _UserService: UserService){}

      create(_CreateCompanyDto: CreateCompanyDto): Promise<Company>{
        let user;
        const result = this.companyRepository.create(_CreateCompanyDto);
        this.companyRepository.save(result);
        
        if(result){
            user = this._UserService.create(_CreateCompanyDto.User);
        }

        return user;
    }

    async findAll(): Promise<Company[]> {
        return await this.companyRepository.find();
    }


    async findOne(id: number): Promise<Company> {
        try {
            const result = await this.companyRepository.findOne({
                where:{
                    id
                }
            });

            if(!result){
                throw new HttpException("USER_ID_NOT_EXISTS",HttpStatus.NOT_FOUND);
            }
            return result;
        } catch (error) {
             throw new HttpException("",HttpStatus.BAD_REQUEST);
        }
        
    }
}

