import { Module } from '@nestjs/common';
import { UserProfileModule } from './modules/user-profile/user-profile.module';
import { LikeModule } from './modules/like/like.module';
import { BirthdayModule } from './modules/birthday/birthday.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserProfileModule, LikeModule, BirthdayModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
