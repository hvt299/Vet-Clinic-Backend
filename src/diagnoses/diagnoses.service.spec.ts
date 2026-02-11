import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosesService } from './diagnoses.service';

describe('DiagnosesService', () => {
  let service: DiagnosesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosesService],
    }).compile();

    service = module.get<DiagnosesService>(DiagnosesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
