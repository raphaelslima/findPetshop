import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetshopService } from './shared/petshop.service/petshop.service';
import { Petshop } from './shared/petshop/petshop';

@Controller('petshops')
export class PetshopsController {
  constructor(private petshopService: PetshopService) {}

  @Get()
  async getAll(): Promise<Petshop[]> {
    return this.petshopService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Petshop> {
    return this.petshopService.getById(id);
  }

  @Post()
  async create(@Body() petshop: Petshop): Promise<Petshop> {
    return this.petshopService.create(petshop);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() task: Petshop,
  ): Promise<Petshop> {
    return this.petshopService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.petshopService.delete(id);
  }
}
