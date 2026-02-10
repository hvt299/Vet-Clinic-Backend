import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatmentCoursesService } from './treatment-courses.service';
import { TreatmentCoursesController } from './treatment-courses.controller';
import { TreatmentCourse, TreatmentCourseSchema } from './schemas/treatment-course.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TreatmentCourse.name, schema: TreatmentCourseSchema }])],
  controllers: [TreatmentCoursesController],
  providers: [TreatmentCoursesService],
  exports: [TreatmentCoursesService],
})
export class TreatmentCoursesModule {}