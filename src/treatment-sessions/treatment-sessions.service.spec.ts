import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentSessionsService } from './treatment-sessions.service';

describe('TreatmentSessionsService', () => {
  let service: TreatmentSessionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatmentSessionsService],
    }).compile();

    service = module.get<TreatmentSessionsService>(TreatmentSessionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
