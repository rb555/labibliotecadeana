import { IsString, MinLength } from "class-validator";

export class CreateBookDto {
    @IsString()
    @MinLength(5)
    name: string;
}
