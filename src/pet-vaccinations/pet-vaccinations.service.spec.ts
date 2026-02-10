import { Test, TestingModule } from '@nestjs/testing';
import { PetVaccinationsService } from './pet-vaccinations.service';

describe('PetVaccinationsService', () => {
  let service: PetVaccinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetVaccinationsService],
    }).compile();

    service = module.get<PetVaccinationsService>(PetVaccinationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
