import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "./entity/company.entity";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { UserModule } from "src/user/user.module";

@Module({
    imports:[TypeOrmModule.forFeature([Company]),UserModule],
    controllers:[CompanyController],
    providers:[CompanyService]
})
export class CompanyModule {}