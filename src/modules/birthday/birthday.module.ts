import { Module } from '@nestjs/common';
import { BirthdayService } from './birthday.service';
import { BirthdayController } from './birthday.controller';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  controllers: [BirthdayController],
  providers: [BirthdayService, PrismaService],
})
export class BirthdayModule {}
