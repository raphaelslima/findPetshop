import { Test, TestingModule } from '@nestjs/testing';
import { Petshops } from './petshops';

describe('Petshops', () => {
  let provider: Petshops;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Petshops],
    }).compile();

    provider = module.get<Petshops>(Petshops);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
