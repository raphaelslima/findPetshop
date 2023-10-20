import { Test, TestingModule } from '@nestjs/testing';
import { PetshopsController } from './petshops.controller';

describe('PetshopsController', () => {
  let controller: PetshopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetshopsController],
    }).compile();

    controller = module.get<PetshopsController>(PetshopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
