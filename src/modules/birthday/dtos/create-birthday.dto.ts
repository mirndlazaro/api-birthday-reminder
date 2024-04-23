import { ApiProperty } from "@nestjs/swagger"
import { Like } from "@prisma/client"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, MaxDate } from "class-validator"
import { CreateLikeDTO } from "src/modules/like/dtos/create-like.dto"

export enum UserGender {
    Homem = 'Homem',
    Mulher = 'Mulher',
 }

 export class CreateBirthdayDTO {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ 
        example: "Jhon", 
        required: true
    })
    readonly firstName: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ 
        example: "Due", 
        required: true
    })
    readonly lastName: string
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ 
        example: "Dude", 
        required: false
    })
    readonly surname: string

    @ApiProperty({ 
        example: "Homem | Mulher", 
        required: false
    })
    @IsEnum(UserGender)
    readonly gender: UserGender|string;

    @ApiProperty({ 
        example: '2019-10-14T16:57:01.000Z', 
        required: false 
    })
    @IsDate()
    @Type(() => Date)
    @MaxDate(new Date())
    readonly birthdate: Date

    @IsArray()
    @Type(() => CreateLikeDTO[])
    @ApiProperty({ 
        example: `[ { "description": "Like" }]`, 
        required: false 
    })
    readonly likes?: Like[]
}