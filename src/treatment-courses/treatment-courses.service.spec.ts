import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentCoursesService } from './treatment-courses.service';

describe('TreatmentCoursesService', () => {
  let service: TreatmentCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatmentCoursesService],
    }).compile();

    service = module.get<TreatmentCoursesService>(TreatmentCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
