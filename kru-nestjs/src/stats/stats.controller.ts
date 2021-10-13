import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { Stats } from './interfaces/stats.interface';
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

  @Post()
  async createStats(@Body() data: Stats) {
    const result = await this.statsService.createStats(data);
    if (result) return true;
    else throw new ForbiddenException();
  }
}
