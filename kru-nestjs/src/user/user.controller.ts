import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('myprofile/:uuId')
  async myProfile(@Param('uuId') uuId: string) {
    return await this.userService.myProfile(uuId);
  }

  @Put('updatemajor')
  async updateMajor(@Body() data: any) {
    return await this.userService.updateMajor(data);
  }
}
