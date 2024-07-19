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
  async create(@Body() createClientDto: CreateClientDto):Promise<ApiResponse<Client>> {

    const result = await this.clientService.create(createClientDto);
    return  new ApiResponse(true, 201, ["Create success"], result);

  }

  @Get()
  async findAll():Promise<ApiResponse<Client[]>> {
    const result = await this.clientService.getAllClients();

    return new ApiResponse(true, 200,["get all rol"], result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<ApiResponse<Client>> {
    const result = await this.clientService.getClient(+id);
    return new ApiResponse(true,200,["Get by id"],result);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.updateClient(+id, updateClientDto);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }*/
}
