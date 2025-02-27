import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LikeService } from './like.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLikeDTO } from './dtos/create-like.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @ApiTags('Like')
  @ApiOperation({ summary: 'Get all likes' })
  @Get(':birthdayId')
  async getAll(@Param('birthdayId') id: string){
    try {
      return this.likeService.getAll(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('Like')
  @ApiOperation({ summary: 'Get like by ID' })
  @Get(':likeId')
  async getLikeById(@Param('likeId') id: string){
    try {
      return this.likeService.getById(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('Like')
  @ApiOperation({ summary: 'Create like' })
  @Post(':birthdayId')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
      type: CreateLikeDTO,
      description: 'Json structure for user object',
  })
  async createLike(@Param('birthdayId') birthdayId: string, @Body() like: CreateLikeDTO){
    try {
      return this.likeService.create(birthdayId, like);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiTags('Like')
  @ApiOperation({ summary: 'Update like' })
  @Put(':id')
  @ApiBody({
    type: CreateLikeDTO,
    description: 'Json structure for user object',
  })
  async UpdateLike(@Param('id') id: string, @Body() dataLike: CreateLikeDTO){
    try {
      return this.likeService.update(id, dataLike);
    } catch (error) {
      throw new BadRequestException('Like cant be updated');
    }
  }

  @ApiTags('Like')
  @ApiOperation({ summary: 'Delete like' })
  @Delete(':likeId')
  async DeleteLike(@Param('likeId') likeId: string){
    try {
      return this.likeService.delete(likeId);
    } catch (error) {
      throw new BadRequestException('Like cant be deleted');
    }
  }
}
