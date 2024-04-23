import { ApiProperty } from "@nestjs/swagger";
import { Birthday } from "@prisma/client";
import { Type } from "class-transformer";
import { IsArray, IsDate, IsEmail, IsNotEmpty, IsObject } from "class-validator";

export enum UserGender {
    Homem = 'Homem',
    Mulher = 'Mulher',
 }

export class CreateUserDTO {
    @ApiProperty({
        example: 'Jhon',
        required: true
    })
    @IsNotEmpty()
    readonly firstName: string;

    @ApiProperty({
        example: 'Due',
        required: true
    })
    @IsNotEmpty()
    readonly lastName: string;

    @ApiProperty({
        example: 'user@gmail.com',
        required: true
    })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ 
        example: "Homem | Mulher", 
        required: false
    })
    readonly gender: UserGender;

    @ApiProperty({ 
        example: '2019-10-14T16:57:01.000Z', 
        required: false 
    })
    @IsDate()
    @Type(() => Date)
    readonly birthdate: Date;
}