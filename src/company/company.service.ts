import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "./entity/company.entity";
import { Repository } from "typeorm";
import { UserService } from "src/user/user.service";
import { CreateCompanyDto } from "./dto/create-company.dto";

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>,
                private readonly _UserService: UserService){}

      async create(_CreateCompanyDto: CreateCompanyDto): Promise<Company>{
        let user;
        const company = this.companyRepository.create(_CreateCompanyDto);
        const result = await this.companyRepository.save(company);
        
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
                throw new BadRequestException("USER_ID_NOT_EXISTS");
            }
            return result;
        } catch (error) {
             throw new HttpException(error,HttpStatus.BAD_REQUEST);
        }
        
    }
}

