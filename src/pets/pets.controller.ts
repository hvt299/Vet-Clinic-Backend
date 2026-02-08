import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Post()
  @ApiOperation({ summary: 'Thêm thú cưng mới' })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Danh sách thú cưng (Kèm thông tin chủ)' })
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Xem chi tiết thú cưng' })
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật hồ sơ thú cưng' })
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa thú cưng' })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}