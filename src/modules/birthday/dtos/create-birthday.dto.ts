import { ApiProperty } from "@nestjs/swagger"
import { Like } from "@prisma/client"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"

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
    readonly gender: UserGender|string;

    @ApiProperty({ 
        example: '2019-10-14T16:57:01.000Z', 
        required: false 
    })
    @IsDate()
    @Type(() => Date)
    readonly birthdate: Date

    @IsArray()
    @ApiProperty({ 
        example: `[ { "description": "Like" }]`, 
        required: false 
    })
    readonly likes?: Like[]
}