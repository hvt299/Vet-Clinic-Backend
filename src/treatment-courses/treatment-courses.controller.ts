import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentCoursesService } from './treatment-courses.service';
import { CreateTreatmentCourseDto } from './dto/create-treatment-course.dto';
import { UpdateTreatmentCourseDto } from './dto/update-treatment-course.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Treatment Courses')
@Controller('treatment-courses')
export class TreatmentCoursesController {
  constructor(private readonly service: TreatmentCoursesService) { }

  @Post()
  @ApiOperation({ summary: 'Tạo đợt điều trị mới' })
  create(@Body() createDto: CreateTreatmentCourseDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách đợt điều trị' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết đợt điều trị' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật đợt điều trị' })
  update(@Param('id') id: string, @Body() updateDto: UpdateTreatmentCourseDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa đợt điều trị' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}