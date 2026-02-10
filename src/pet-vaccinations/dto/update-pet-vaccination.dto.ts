import { PartialType } from '@nestjs/swagger';
import { CreatePetVaccinationDto } from './create-pet-vaccination.dto';

export class UpdatePetVaccinationDto extends PartialType(CreatePetVaccinationDto) {}
