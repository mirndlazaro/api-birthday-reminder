import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserProfileService } from 'src/modules/user-profile/user-profile.service';

@Injectable()
export class AuthService {
constructor(
    private usersService: UserProfileService, 
    private jwtService: JwtService
) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
