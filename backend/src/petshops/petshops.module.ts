import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PetshopsController } from './petshops.controller';
import { PetshopService } from './shared/petshop.service/petshop.service';
import { PetshopSchema } from './schemas/petshop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Petshop',
        schema: PetshopSchema,
      },
    ]),
  ],
  controllers: [PetshopsController],
  providers: [PetshopService],
})
export class PetshopsModule {}
