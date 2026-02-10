import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetVaccinationsService } from './pet-vaccinations.service';
import { PetVaccinationsController } from './pet-vaccinations.controller';
import { PetVaccination, PetVaccinationSchema } from './schemas/pet-vaccination.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: PetVaccination.name, schema: PetVaccinationSchema }])],
  controllers: [PetVaccinationsController],
  providers: [PetVaccinationsService],
  exports: [PetVaccinationsService],
})
export class PetVaccinationsModule {}