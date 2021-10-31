import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Public } from 'src/auth/jwt-auth.guard';
import { News } from './interfaces/news.interface';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Public()
  @Get()
  async findAll() {
    return await this.newsService.findAll();
  }

  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  @Post()
  async createNews(
    @Body() data: News,
    @UploadedFile() file: Express.Multer.File,
  ) {
    data.news = file.filename;
    await this.newsService.createNews(data);
    return file;
  }

  @Public()
  @Get('/:id')
  async getImgs(@Param('id') id: string, @Res() res) {
    const file = createReadStream(join(process.cwd(), `uploads/${id}`));
    return file.pipe(res);
  }
}
