import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Public } from 'src/auth/jwt-auth.guard';
import { ForumDetailService } from './forum-detail.service';
import { ForumDetail } from './interfaces/forum-detail.interface';

@Controller('detail')
export class ForumDetailController {
  constructor(private forumDetailService: ForumDetailService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.forumDetailService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.forumDetailService.findOne(id);
  }

  @Post()
  async createForumDetail(@Body() data: ForumDetail): Promise<ForumDetail> {
    return await this.forumDetailService.createForumDetail(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ForumDetail) {
    const job = await this.forumDetailService.findOne(id);
    if (!job) throw new NotFoundException();
    data.uuId = job.uuId;
    return await this.forumDetailService.updateForumDetail(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.forumDetailService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.forumDetailService.removeForumDetail(id);
  }
}
