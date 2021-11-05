import { Body, Controller, Get, Put } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Put('updatemajor')
  async updateMajor(@Body() data: any) {
    return await this.userService.updateMajor(data);
  }
}
