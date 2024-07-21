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
  async create(@Body() createRolDto: CreateRolDto):Promise<Rol> {
    return await this.rolService.create(createRolDto);
  }

  @Get()
  async findAll():Promise<Rol[]> {
    return await this.rolService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string):Promise<Rol> {
   return await this.rolService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRolDto: UpdateRolDto):Promise<Rol>  {
    return await this.rolService.update(+id, updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.remove(+id);
  }
}
