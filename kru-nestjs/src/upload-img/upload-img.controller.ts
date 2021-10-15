import {
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
import { of, pipe } from 'rxjs';
import { Public } from 'src/auth/jwt-auth.guard';

@Controller('upload-img')
export class UploadImgController {
  @Public()
  @Get()
  getHello(): string {
    return 'hello';
  }

  @Public()
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './uploads',
    }),
  )
  // @UseInterceptors(FileInterceptor('image', { storage: myStorage }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return of(file);
  }

  // @Public()
  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     dest: './uploads',
  //   }),
  // )
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   return of(file);
  // }

  @Public()
  @Get('upload/:id')
  async getImgs(@Param('id') id: string, @Res() res) {
    // return of(res.sendFile(join(process.cwd(), 'uploads/' + id)));
    const file = createReadStream(join(process.cwd(), `uploads/${id}`));
    return file.pipe(res);
  }
}

// import { diskStorage } from 'multer';
// import { extname } from 'path';

// export const myStorage = diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads/');
//   },
//   filename: (req, file, cb) => {
//     const randomName = Array(32)
//       .fill(null)
//       .map(() => Math.round(Math.random() * 16).toString(16))
//       .join('');
//     return cb(null, `${randomName}${extname(file.originalname)}`);
//   },
// });
