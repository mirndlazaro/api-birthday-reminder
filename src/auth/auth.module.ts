import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserProfileModule } from 'src/modules/user-profile/user-profile.module';

@Module({
  imports: [UserProfileModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
