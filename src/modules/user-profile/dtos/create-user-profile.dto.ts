import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty } from "class-validator";

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

    @ApiProperty({ example: "Homem | Mulher"})
    readonly gender: UserGender;

    @ApiProperty({ example: '2019-10-14T16:57:01.000Z' })
    @IsDate()
    readonly birthdate: string;
}