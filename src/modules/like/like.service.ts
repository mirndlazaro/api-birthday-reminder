import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateLikeDTO } from './dtos/create-like.dto';

@Injectable()
export class LikeService {
    constructor(private prisma: PrismaService){}

    async getAll(id: string){
        return this.prisma.like.findMany({
            where: {
                birthdayId: id,
            }
        });
    }

    async getById(id: string){
        return this.prisma.like.findMany({
            where: {
                id: id,
            }
        });
    }

    async create(id: string, data: CreateLikeDTO){
        const like = await this.prisma.like.create({
            data: {
                birthdayId: id,
                description: data.description
            }
        });

        return like;
    }

    async update(id: string, data: CreateLikeDTO){
        const like = await this.prisma.like.update({
            where: {
                id: id
            },
            data: {
                description: data.description,
            }
        });

        return like;
    }

    async delete(likeId: string){
        return this.prisma.like.delete({
            where: {
                id: likeId,
            }
        });
    }
}
