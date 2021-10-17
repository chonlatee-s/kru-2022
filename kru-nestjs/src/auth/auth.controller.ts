import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { Public } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Get('check/:email')
  async find(@Param('email') email: string): Promise<boolean> {
    const data = await this.userService.findOne(email);
    if (data) return true;
    else return false;
  }

  @Public()
  @Post('register')
  async create(@Body() data: User): Promise<User> {
    return await this.userService.createUser(data);
  }
}
