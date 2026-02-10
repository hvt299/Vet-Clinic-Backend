import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetVaccinationsService } from './pet-vaccinations.service';
import { CreatePetVaccinationDto } from './dto/create-pet-vaccination.dto';
import { UpdatePetVaccinationDto } from './dto/update-pet-vaccination.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pet Vaccinations')
@Controller('pet-vaccinations')
export class PetVaccinationsController {
  constructor(private readonly petVaccinationsService: PetVaccinationsService) { }

  @Post()
  @ApiOperation({ summary: 'Tạo lịch tiêm chủng mới' })
  create(@Body() createPetVaccinationDto: CreatePetVaccinationDto) {
    return this.petVaccinationsService.create(createPetVaccinationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tất cả lịch tiêm chủng' })
  findAll() {
    return this.petVaccinationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết một lịch tiêm chủng' })
  findOne(@Param('id') id: string) {
    return this.petVaccinationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin lịch tiêm chủng' })
  update(@Param('id') id: string, @Body() updatePetVaccinationDto: UpdatePetVaccinationDto) {
    return this.petVaccinationsService.update(id, updatePetVaccinationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa lịch tiêm chủng' })
  remove(@Param('id') id: string) {
    return this.petVaccinationsService.remove(id);
  }
}