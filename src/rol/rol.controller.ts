import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ApiResponse } from 'src/common/utils/ApiResponse';
import { Rol } from './entities/rol.entity';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('rol')
@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  async create(@Body() createRolDto: CreateRolDto):Promise<ApiResponse<Rol>> {

    const result = await this.rolService.create(createRolDto);
    return  new ApiResponse(true, 201, ["Create success"], result);

  }

  @Get()
  async findAll():Promise<ApiResponse<Rol[]>> {
    const result = await this.rolService.findAll();

    return new ApiResponse(true, 200,["get all rol"], result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<ApiResponse<Rol>> {
    const result = await this.rolService.findOne(+id);
    return new ApiResponse(true,200,["Get by id"],result);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto) {
    return this.rolService.update(+id, updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }
}
