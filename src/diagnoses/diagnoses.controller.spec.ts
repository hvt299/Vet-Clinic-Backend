import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosesController } from './diagnoses.controller';
import { DiagnosesService } from './diagnoses.service';

describe('DiagnosesController', () => {
  let controller: DiagnosesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosesController],
      providers: [DiagnosesService],
    }).compile();

    controller = module.get<DiagnosesController>(DiagnosesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
