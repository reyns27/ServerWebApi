import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "./entity/company.entity";
import { Repository, DataSource } from "typeorm";
import { UserService } from "src/user/user.service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private companyRepository: Repository<Company>,
                private readonly _UserService: UserService,
                private readonly _DataSource:DataSource){}

      async create(_CreateCompanyDto: CreateCompanyDto): Promise<Company>{
        let commit = this._DataSource.createQueryRunner();
        let user;

        try {

            commit.startTransaction();
            const company = this.companyRepository.create(_CreateCompanyDto);
            const result = await commit.manager.save(company);

             const _UserCompany:CreateUserDto = {
                ..._CreateCompanyDto.User,
                rolId:1,
                userName:_CreateCompanyDto.User.email,
            }

            if(result){
                user = await this._UserService.create(_UserCompany);
            }
            
            commit.commitTransaction();
            return result;

        } catch (error) {
            commit.rollbackTransaction();
            throw new HttpException('CREATE_USER_FOUND',HttpStatus.BAD_REQUEST);
        }
       
    }

    async findAll(): Promise<Company[]> {
        return await this.companyRepository.find({
            relations:['users']
        });
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

    async update(id: number, _UpdateCompanyDto: UpdateCompanyDto): Promise<Company> {
        const _Company = await this.companyRepository.findOne({
            where:{
                id
            }
        });

        if(!_Company){
            throw new BadRequestException("USER_ID_NOT_EXISTS");
        }

        try {
            const result = await this.companyRepository.update(id,_UpdateCompanyDto);

            if(result.affected == 1){
                return await this.companyRepository.findOne({
                    where:{
                        id
                    }
                });
            }

            throw new HttpException('USER_NOT_UPDATE',HttpStatus.EXPECTATION_FAILED);

        } catch (error) {
            throw new HttpException(error,HttpStatus.BAD_REQUEST);
        }
    }
}

