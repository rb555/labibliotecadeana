import { IsEmail, IsInt, IsMobilePhone, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsMobilePhone()
    phone: string;

    @IsEmail()
    email: string;
}
