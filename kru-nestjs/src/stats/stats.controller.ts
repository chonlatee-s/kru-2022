import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { StatsCreate } from './interfaces/stats-create.interface';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private statsService: StatsService) {}
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.statsService.findOne(id);
  }

  @Public()
  @Get('competitor/top5')
  async find() {
    return await this.statsService.findTop5();
  }

  @Post()
  async createStats(@Body() data: StatsCreate) {
    await this.statsService.createStats(data);
  }
}
