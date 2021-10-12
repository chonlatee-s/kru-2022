import { Controller, Get, Param } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.statsService.findOne(id);
  }
  @Get('competitor/top5')
  async find() {
    return await this.statsService.findTop5();
  }
}
