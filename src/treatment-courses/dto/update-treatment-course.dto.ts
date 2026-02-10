import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentCourseDto } from './create-treatment-course.dto';

export class UpdateTreatmentCourseDto extends PartialType(CreateTreatmentCourseDto) {}
