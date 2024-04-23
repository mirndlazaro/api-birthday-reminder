import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BirthdayService } from './birthday.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBirthdayDTO } from './dtos/create-birthday.dto';

@Controller('birthday')
export class BirthdayController {
  constructor(private readonly birthdayService: BirthdayService, ) {}

  @ApiTags('Birthday')
  @ApiOperation({ summary: 'Get all birthdays' })
  @Get(':userId')
  async getAll(@Param('userId') id: string){
    try {
      return this.birthdayService.getAll(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('Birthday')
  @ApiOperation({ summary: 'Get birthday by ID' })
  @Get(':birthdayId')
  async getById(@Param('birthdayId') id: string){
    try {
      return this.birthdayService.getBirthdayById(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('Birthday')
  @ApiOperation({ summary: 'Create birthday' })
  @Post(':userId')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
      type: CreateBirthdayDTO,
      description: 'Json structure for user object',
  })
  async createLike(@Param('userId') userId: string, @Body() birthday: CreateBirthdayDTO){
    try {
      return this.birthdayService.create(userId, birthday);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiTags('Birthday')
  @ApiOperation({ summary: 'Update birthday' })
  @Put(':birthdayId')
  @ApiBody({
    type: CreateBirthdayDTO,
    description: 'Json structure for user object',
  })
  async UpdateLike(@Param('birthdayId') birthdayId: string, @Body() birthday: CreateBirthdayDTO){
    try {
      return this.birthdayService.update(birthdayId, birthday);
    } catch (error) {
      throw new BadRequestException('Like cant be updated');
    }
  }

  @ApiTags('Birthday')
  @ApiOperation({ summary: 'Delete birthday' })
  @Delete(':birthdayId')
  async DeleteLike(@Param('birthdayId') birthdayId: string){
    try {
      return this.birthdayService.delete(birthdayId);
    } catch (error) {
      throw new BadRequestException('Like cant be deleted');
    }
  }
}
