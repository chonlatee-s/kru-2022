import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/interfaces/user.interface';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(email, password);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const major = await this.usersService.findOneById(user.uuId);

    const payload = {
      uuId: user.uuId,
      email: user.email,
      fullname: user.fullname,
      profile: user.profile,
      major: major.major.major,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
