import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VaccinesService } from './vaccines.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Vaccines')
@Controller('vaccines')
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) { }

  @Post()
  @ApiOperation({ summary: 'Thêm vắc-xin mới' })
  create(@Body() createVaccineDto: CreateVaccineDto) {
    return this.vaccinesService.create(createVaccineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách vắc-xin' })
  findAll() {
    return this.vaccinesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết một vắc-xin' })
  findOne(@Param('id') id: string) {
    return this.vaccinesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật vắc-xin' })
  update(@Param('id') id: string, @Body() updateVaccineDto: UpdateVaccineDto) {
    return this.vaccinesService.update(id, updateVaccineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa vắc-xin' })
  remove(@Param('id') id: string) {
    return this.vaccinesService.remove(id);
  }
}