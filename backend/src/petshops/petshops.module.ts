import { Module } from '@nestjs/common';
import { PetshopsController } from './petshops.controller';
import { PetshopService } from './shared/petshop.service/petshop.service';

@Module({
  controllers: [PetshopsController],
  providers: [PetshopService],
})
export class PetshopsModule {}
