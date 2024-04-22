import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateBirthdayDTO } from './dtos/create-birthday.dto';

@Injectable()
export class BirthdayService {
    constructor(private prisma: PrismaService) {}
    
    async create(id: string, data: CreateBirthdayDTO){
        // const birthday = null;

        // if (birthdayData.likes.length > 0) birthday
        // if (birthdayData.specialMoments.length > 0) birthday

        const birthday = await this.prisma.birthday.create({
            data: {
                firstName: data.firstName,
                lastName: data. lastName,
                surname: data.surname,
                gender: data.gender,
                birthdate: data.birthdate,
                userId: id
            }
        });

        return birthday;
    }

    async getAll(userId: string){
        const birthdays = await this.prisma.birthday.findMany({
            where: {
                userId: userId
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                surname: true,
                gender: true,
                birthdate: true,
                likes: true,
            }
        });

        return birthdays;
    }

    async getBirthdayById(birthdayId: string){
        const birthdays = await this.prisma.birthday.findMany({
            where: {
                id: birthdayId
            },
        });

        return birthdays;
    }

    async update(birthdayId: string, data: CreateBirthdayDTO) {
        const userEdit = await this.prisma.birthday.update({
            where: { id: birthdayId},
            data: { 
                firstName: data.firstName,
                lastName: data.lastName,
                surname: data.surname,
                birthdate: data.birthdate,
                gender: data.gender,
            }
        });

        return userEdit;
    }

    async delete(id: string){
        return this.prisma.birthday.delete({
            where: {
                id: id,
            },
        })
    }
}
