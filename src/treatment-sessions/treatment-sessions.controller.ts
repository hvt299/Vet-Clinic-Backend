import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentSessionsService } from './treatment-sessions.service';
import { CreateTreatmentSessionDto } from './dto/create-treatment-session.dto';
import { UpdateTreatmentSessionDto } from './dto/update-treatment-session.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Treatment Sessions')
@Controller('treatment-sessions')
export class TreatmentSessionsController {
  constructor(private readonly service: TreatmentSessionsService) { }

  @Post()
  @ApiOperation({ summary: 'Tạo phiên khám mới' })
  create(@Body() createDto: CreateTreatmentSessionDto) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả phiên khám (Admin)' })
  findAll() {
    return this.service.findAll();
  }

  @Get('by-course/:courseId')
  @ApiOperation({ summary: 'Lấy danh sách phiên khám theo Đợt điều trị' })
  findByCourseId(@Param('courseId') courseId: string) {
    return this.service.findByCourseId(courseId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết phiên khám' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật phiên khám' })
  update(@Param('id') id: string, @Body() updateDto: UpdateTreatmentSessionDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa phiên khám' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}