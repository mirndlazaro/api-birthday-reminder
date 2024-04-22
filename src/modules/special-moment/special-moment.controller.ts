import { Controller } from '@nestjs/common';
import { SpecialMomentService } from './special-moment.service';

@Controller('special-moment')
export class SpecialMomentController {
  constructor(private readonly specialMomentService: SpecialMomentService) {}
}
