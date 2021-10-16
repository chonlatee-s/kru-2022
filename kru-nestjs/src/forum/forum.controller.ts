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
import { ForumService } from './forum.service';
import { Forum } from './interfaces/forum.interface';

@Controller('forum')
export class ForumController {
  constructor(private forumService: ForumService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.forumService.findAll();
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.forumService.findOne(id);
  }

  @Post()
  async createForum(@Body() data: Forum): Promise<Forum> {
    return await this.forumService.createForum(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Forum) {
    const job = await this.forumService.findOne(id);
    if (!job) throw new NotFoundException();
    data.uuId = job.uuId;
    return await this.forumService.updateForum(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const job = await this.forumService.findOne(id);
    if (!job) throw new NotFoundException();
    return await this.forumService.removeForum(id);
  }
}
