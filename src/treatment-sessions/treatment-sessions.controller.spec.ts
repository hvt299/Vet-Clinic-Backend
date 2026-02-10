import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentSessionsController } from './treatment-sessions.controller';
import { TreatmentSessionsService } from './treatment-sessions.service';

describe('TreatmentSessionsController', () => {
  let controller: TreatmentSessionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentSessionsController],
      providers: [TreatmentSessionsService],
    }).compile();

    controller = module.get<TreatmentSessionsController>(TreatmentSessionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
