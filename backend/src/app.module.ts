import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetshopsModule } from './petshops/petshops.module';

@Module({
  imports: [PetshopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
