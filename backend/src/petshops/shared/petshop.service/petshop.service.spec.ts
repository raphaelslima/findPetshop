import { Test, TestingModule } from '@nestjs/testing';
import { PetshopService } from './petshop.service';

describe('PetshopService', () => {
  let provider: PetshopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetshopService],
    }).compile();

    provider = module.get<PetshopService>(PetshopService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
