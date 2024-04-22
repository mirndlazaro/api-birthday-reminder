import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserDTO } from './dtos/create-user-profile.dto';

@Controller('api/v1/user')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  async getAllUsers(){
    return this.userProfileService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string){
    try {
      return this.userProfileService.findUserById(id);
    } catch (error) {
      throw new BadRequestException('User doesnt find');
    }
  }

  @Post()
  async createUserProfile(@Body() userProfile: CreateUserDTO){
    try {
      return this.userProfileService.create(userProfile);
    } catch (error) {
      throw new BadRequestException('User already exists');
    }
  }

  @Put(':id')
  async UpdateUser(@Param('id') id: string, @Body() dataUser: CreateUserDTO){
    try {
      return this.userProfileService.editUser(id, dataUser);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }

  @Delete(':id')
  async DeleteUser(@Param('id') id: string){
    try {
      return this.userProfileService.deleteUser(id);
    } catch (error) {
      throw new BadRequestException('User cant be deleted');
    }
  }
}
