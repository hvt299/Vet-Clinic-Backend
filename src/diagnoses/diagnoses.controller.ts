import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiagnosesService } from './diagnoses.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Diagnoses')
@Controller('diagnoses')
export class DiagnosesController {
  constructor(private readonly diagnosesService: DiagnosesService) { }

  @Post()
  @ApiOperation({ summary: 'Tạo chẩn đoán mới' })
  create(@Body() createDto: CreateDiagnosisDto) {
    return this.diagnosesService.create(createDto);
  }

  @Get('by-session/:sessionId')
  @ApiOperation({ summary: 'Lấy danh sách chẩn đoán theo Phiên khám' })
  findBySessionId(@Param('sessionId') sessionId: string) {
    return this.diagnosesService.findBySessionId(sessionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDiagnosisDto) {
    return this.diagnosesService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosesService.remove(id);
  }
}