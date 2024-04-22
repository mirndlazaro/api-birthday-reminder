import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserDTO } from './dtos/create-user-profile.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/user')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @ApiTags('User')
  @Get()
  async getAllUsers(){
    return this.userProfileService.getAll();
  }

  @ApiTags('User')
  @Get(':id')
  async getUserById(@Param('id') id: string){
    try {
      return this.userProfileService.findUserById(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @ApiTags('User')
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
  @Put(':id')
  async UpdateUser(@Param('id') id: string, @Body() dataUser: CreateUserDTO){
    try {
      return this.userProfileService.editUser(id, dataUser);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }

  @ApiTags('User')
  @Delete(':id')
  async DeleteUser(@Param('id') id: string){
    try {
      return this.userProfileService.deleteUser(id);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }
}
