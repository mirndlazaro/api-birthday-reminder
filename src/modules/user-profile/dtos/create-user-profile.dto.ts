import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsObject, IsString, MaxDate } from "class-validator";

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
    @IsString()
    readonly firstName: string;

    @ApiProperty({
        example: 'Due',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @ApiProperty({
        example: 'user@gmail.com',
        required: true
    })
    @IsEmail()
    @IsString()
    readonly email: string;

    @ApiProperty({ 
        example: "Homem | Mulher", 
        required: false
    })
    @IsEnum(UserGender)
    @IsString()
    readonly gender: UserGender;

    @ApiProperty({ 
        example: '2019-10-14T16:57:01.000Z', 
        required: false 
    })
    @IsDate()
    @Type(() => Date)
    @MaxDate(new Date())
    readonly birthdate: Date;
}