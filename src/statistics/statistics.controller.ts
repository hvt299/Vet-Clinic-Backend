import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Statistics')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) { }

  @Get('general')
  @ApiOperation({ summary: 'Lấy số liệu tổng quan (Cards)' })
  getGeneralStats() {
    return this.statisticsService.getGeneralStats();
  }

  @Get('today')
  @ApiOperation({ summary: 'Lấy hoạt động trong ngày' })
  getTodayStats() {
    return this.statisticsService.getTodayStats();
  }

  @Get('revenue-chart')
  @ApiOperation({ summary: 'Lấy dữ liệu biểu đồ 6 tháng gần nhất' })
  getChartData() {
    return this.statisticsService.getSixMonthTrend();
  }

  @Get('recent-treatments')
  @ApiOperation({ summary: 'Lấy danh sách 5 ca đang điều trị gần nhất' })
  getRecentTreatments() {
    return this.statisticsService.getRecentTreatments();
  }

  @Get('top-diagnoses')
  @ApiOperation({ summary: 'Lấy top 5 bệnh lý thường gặp' })
  getTopDiagnoses() {
    return this.statisticsService.getTopDiagnoses();
  }
}