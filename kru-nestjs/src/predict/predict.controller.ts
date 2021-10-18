import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { PredictService } from './predict.service';

@Controller('predict')
export class PredictController {
  constructor(private predictService: PredictService) {}

  @Public()
  @Get()
  async find() {
    return await this.predictService.find();
  }
}
