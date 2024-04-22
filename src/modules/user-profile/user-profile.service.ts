import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user-profile.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class UserProfileService {
    constructor(private prisma: PrismaService) {}
    
    async create(data: CreateUserDTO){
        const userExists = this.prisma.user.findFirst({
            where: {
                email: data.email
            }
        });

        if(userExists) throw new Error("User already exists");

        const user = await this.prisma.user.create({
            data
        });

        return user;
    }

    async getAll(){
        return this.prisma.user.findMany();
    }

    async findUserById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        })

        return user;
    }

    async editUser(id: string, data: CreateUserDTO) {
        const userEdit = await this.prisma.user.update({
            where: { id: id},
            data: { 
                firstName: data.firstName,
                lastName: data.lastName,
                birthdate: data.birthdate,
                gender: data.gender,
                email: data.email,
            }
        });

        return userEdit;
    }

    async deleteUser(id: string){
        return this.prisma.user.delete({
            where: {
                id: id,
            },
        })
    }
}