import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ApiResponse } from 'src/common/utils/ApiResponse';
import { Client } from './entities/client.entity';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto):Promise<Client> {
    return await this.clientService.create(createClientDto);
  }

  @Get()
  async findAll():Promise<Client[]> {
    return await this.clientService.getAllClients();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Client> {
    return await this.clientService.getClient(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto):Promise<Client>  {
    return this.clientService.updateClient(+id, updateClientDto);
  }

  @Get('/search/:term')
  async search(@Param('term') term:string):Promise<Client[]> {
    return await this.clientService.filterClient(term);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }*/
}
