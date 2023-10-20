import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetshopsModule } from './petshops/petshops.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raphaeldesousalm:IbUSwPt86fZ6Hznp@cluster0.srnbqtq.mongodb.net/?retryWrites=true&w=majority',
    ),
    PetshopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
