import { IsNotEmpty, IsString } from "class-validator";

export class CreateLikeDTO {
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}