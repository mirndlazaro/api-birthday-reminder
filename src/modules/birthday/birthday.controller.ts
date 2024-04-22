import { Controller } from '@nestjs/common';
import { BirthdayService } from './birthday.service';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService) {}
}
