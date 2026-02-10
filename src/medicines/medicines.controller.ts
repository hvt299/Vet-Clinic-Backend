import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicinesService } from './medicines.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Medicines')
@Controller('medicines')
export class MedicinesController {
  constructor(private readonly medicinesService: MedicinesService) { }

  @Post()
  @ApiOperation({ summary: 'Thêm thuốc mới' })
  create(@Body() createMedicineDto: CreateMedicineDto) {
    return this.medicinesService.create(createMedicineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách thuốc' })
  findAll() {
    return this.medicinesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết một thuốc' })
  findOne(@Param('id') id: string) {
    return this.medicinesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thuốc' })
  update(@Param('id') id: string, @Body() updateMedicineDto: UpdateMedicineDto) {
    return this.medicinesService.update(id, updateMedicineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa thuốc' })
  remove(@Param('id') id: string) {
    return this.medicinesService.remove(id);
  }
}