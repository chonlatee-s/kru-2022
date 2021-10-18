import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PredictEntity } from './predict.entity';

@Injectable()
export class PredictService {
  constructor(
    @InjectRepository(PredictEntity)
    private predictRepository: Repository<PredictEntity>,
  ) {}

  async find() {
    return this.predictRepository
      .createQueryBuilder('predict')
      .select(['predict.id', 'predict.result'])
      .orderBy('RAND()')
      .limit(1)
      .getOne();
  }
}
