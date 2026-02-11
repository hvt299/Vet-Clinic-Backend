import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Prescriptions')
@Controller('prescriptions')
export class PrescriptionsController {
  constructor(private readonly prescriptionsService: PrescriptionsService) { }

  @Post()
  @ApiOperation({ summary: 'Kê đơn thuốc mới' })
  create(@Body() createDto: CreatePrescriptionDto) {
    return this.prescriptionsService.create(createDto);
  }

  @Get('by-session/:sessionId')
  @ApiOperation({ summary: 'Lấy danh sách thuốc theo Phiên khám' })
  findBySessionId(@Param('sessionId') sessionId: string) {
    return this.prescriptionsService.findBySessionId(sessionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prescriptionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdatePrescriptionDto) {
    return this.prescriptionsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prescriptionsService.remove(id);
  }
}