import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiagnosesService } from './diagnoses.service';
import { DiagnosesController } from './diagnoses.controller';
import { Diagnosis, DiagnosisSchema } from './schemas/diagnosis.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Diagnosis.name, schema: DiagnosisSchema }])],
  controllers: [DiagnosesController],
  providers: [DiagnosesService],
  exports: [DiagnosesService],
})
export class DiagnosesModule {}