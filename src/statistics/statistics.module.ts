import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';

import { Customer, CustomerSchema } from '../customers/schemas/customer.schema';
import { Pet, PetSchema } from '../pets/schemas/pet.schema';
import { Doctor, DoctorSchema } from '../doctors/schemas/doctor.schema';
import { Medicine, MedicineSchema } from '../medicines/schemas/medicine.schema';
import { TreatmentCourse, TreatmentCourseSchema } from '../treatment-courses/schemas/treatment-course.schema';
import { PetVaccination, PetVaccinationSchema } from '../pet-vaccinations/schemas/pet-vaccination.schema';
import { TreatmentSession, TreatmentSessionSchema } from '../treatment-sessions/schemas/treatment-session.schema';
import { Diagnosis, DiagnosisSchema } from '../diagnoses/schemas/diagnosis.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: Pet.name, schema: PetSchema },
      { name: Doctor.name, schema: DoctorSchema },
      { name: Medicine.name, schema: MedicineSchema },
      { name: TreatmentCourse.name, schema: TreatmentCourseSchema },
      { name: PetVaccination.name, schema: PetVaccinationSchema },
      { name: TreatmentSession.name, schema: TreatmentSessionSchema },
      { name: Diagnosis.name, schema: DiagnosisSchema },
    ]),
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}