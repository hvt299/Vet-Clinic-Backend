import { Test, TestingModule } from '@nestjs/testing';
import { PetVaccinationsController } from './pet-vaccinations.controller';
import { PetVaccinationsService } from './pet-vaccinations.service';

describe('PetVaccinationsController', () => {
  let controller: PetVaccinationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetVaccinationsController],
      providers: [PetVaccinationsService],
    }).compile();

    controller = module.get<PetVaccinationsController>(PetVaccinationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
