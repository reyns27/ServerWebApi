import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./entities/client.entity";
import { Like, Repository } from "typeorm";
import { CreateClientDto } from "./dto/create-client.dto";
import { UpdateClientDto } from "./dto/update-client.dto";
import { ApiResponse } from "src/common/utils/ApiResponse";


@Injectable()
export class ClientService {
    constructor(@InjectRepository(Client) private clientRepository:Repository<Client>){}

    async create(createClientDto:CreateClientDto):Promise<Client>{
         
        let client = this.clientRepository.create(createClientDto);
        const result = await this.clientRepository.save(client);
        return result;
          
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

    async filterClient(term:string):Promise<Client[]>{
        let client:Client[]

            client = await this.clientRepository.find({
                where:{Name: Like(`%${term}%`)}
            })
    
            if(!client){
                client = await this.clientRepository.find({
                    where:{lastName:Like(`%${term}%`)}
                })
            }
    
            if(!client){
                client = await this.clientRepository.find({
                    where:{email:Like(`%${term}%`)}
                })
            }
    
            if(!client){
                client = await this.clientRepository.find({
                    where:{direction:Like(`%${term}%`)}
                })
            }
    
            if(!client){
                client = await this.clientRepository.find({
                    where:{home:Like(`%${term}%`)}
                })
            }
    
            if(!isNaN(+term)){
                client = await this.clientRepository.find({
                    where:{income:+term}
                })
            }
    
            if(!client){
                client = await this.clientRepository.find({
                    where:{home:Like(`%${term}%`)}
                })
            }

            if(client.length == 0)
                throw new NotFoundException(`whith Name,LastName,Direction,Home,Income or no ${term} not found.`);
    
            return client;
    }

}