import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PredictController } from './predict.controller';
import { PredictEntity } from './predict.entity';
import { PredictService } from './predict.service';

@Module({
  imports: [TypeOrmModule.forFeature([PredictEntity])],
  controllers: [PredictController],
  providers: [PredictService],
})
export class PredictModule {}
