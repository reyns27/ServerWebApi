import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./entities/client.entity";
import { Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";


@Injectable()
export class ClientService {
    constructor(@InjectRepository(Client) private clientRepository:Repository<Client>){}

    async create(createClientDto:CreateClientDto):Promise<Client>{
        let client = this.clientRepository.create(createClientDto);
         return this.clientRepository.save(client);
    }

    async getClient(id:number):Promise<Client>{
        const result = await this.clientRepository.findOne({where:{Id:id}})
        return result;
    }

    async getAllClients():Promise<Client[]>{
        const result = await this.clientRepository.find()
        return result;
    }

    async updateClient(id:number, updateClientDto:UpdateClientDto):Promise<Client>{
        const client = await this.getClient(id);
        let result = null;
        if(client)
            result = await this.clientRepository.update(id, updateClientDto);

        const newClient = await this.getClient(id);

        return newClient;
    }

}