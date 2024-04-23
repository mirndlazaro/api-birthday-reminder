import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserProfileService } from 'src/modules/user-profile/user-profile.service';

@Injectable()
export class AuthService {
constructor(private usersService: UserProfileService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
