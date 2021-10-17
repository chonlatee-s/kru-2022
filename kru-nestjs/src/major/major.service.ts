import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Major } from './interfaces/major.interface';
import { MajorEntity } from './major.entity';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(MajorEntity)
    private majorRepository: Repository<MajorEntity>,
  ) {}

  async findAll() {
    return this.majorRepository
      .createQueryBuilder('major')
      .select(['major.id', 'major.major'])
      .getMany();
  }

  async findOne(id: string) {
    return this.majorRepository.findOne({ uuId: id });
  }

  async createMajor(data: Major) {
    return await this.majorRepository.save(data);
  }

  async updateMajor(data: Major) {
    return await this.majorRepository.update({ uuId: data.uuId }, data);
  }

  async removeMajor(id: string) {
    return await this.majorRepository.delete({ uuId: id });
  }
}
