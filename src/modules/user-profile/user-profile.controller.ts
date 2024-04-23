import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserDTO } from './dtos/create-user-profile.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from './dtos/update-user-profile.dto';

@Controller('user')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @ApiTags('User')
  @ApiOperation({ summary: 'Get all users' })
  @Get()
  async getAllUsers(){
    return this.userProfileService.getAll();
  }

  @ApiTags('User')
  @ApiOperation({ summary: 'Get user by ID' })
  @Get(':id')
  async getUserById(@Param('id') id: string){
    try {
      return this.userProfileService.findUserById(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('User')
  @ApiOperation({ summary: 'Create user' })
  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiBody({
      type: CreateUserDTO,
      description: 'Json structure for user object',
  })
  async createUserProfile(@Body() userProfile: CreateUserDTO){
    try {
      return this.userProfileService.create(userProfile);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiTags('User')
  @ApiOperation({ summary: 'Update user' })
  @Put(':id')
  async UpdateUser(@Param('id') id: string, @Body() dataUser: UpdateUserDTO){
    try {
      return this.userProfileService.editUser(id, dataUser);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }

  @ApiTags('User')
  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async DeleteUser(@Param('id') id: string){
    try {
      return this.userProfileService.deleteUser(id);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }
}
