import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentCoursesController } from './treatment-courses.controller';
import { TreatmentCoursesService } from './treatment-courses.service';

describe('TreatmentCoursesController', () => {
  let controller: TreatmentCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentCoursesController],
      providers: [TreatmentCoursesService],
    }).compile();

    controller = module.get<TreatmentCoursesController>(TreatmentCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
