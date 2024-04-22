import { Module } from '@nestjs/common';
import { SpecialMomentService } from './special-moment.service';
import { SpecialMomentController } from './special-moment.controller';

@Module({
  controllers: [SpecialMomentController],
  providers: [SpecialMomentService],
})
export class SpecialMomentModule {}
