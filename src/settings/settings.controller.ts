import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('General Settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) { }

  @Get()
  @ApiOperation({ summary: 'Lấy cấu hình phòng khám (Public)' })
  getSettings() {
    return this.settingsService.getSettings();
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Cập nhật cấu hình phòng khám' })
  update(@Body() updateSettingDto: CreateSettingDto) {
    return this.settingsService.update(updateSettingDto);
  }
}