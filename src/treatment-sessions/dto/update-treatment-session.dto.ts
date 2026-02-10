import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentSessionDto } from './create-treatment-session.dto';

export class UpdateTreatmentSessionDto extends PartialType(CreateTreatmentSessionDto) {}
