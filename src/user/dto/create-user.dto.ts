import {IsString ,IsEmail,MinLength, minLength, } from 'class-validator'

export class CreateUserDto {
    @IsString()
    user_name:string
    @MinLength(3,{message:"the password must be at less 3 charches"})
    password:string
    @IsEmail({},{message:"invalid email format"})
    email:string
}
