import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MaxLength, minDate, MinLength } from 'class-validator';


export class CreateUserDto {

    @ApiProperty({
        required: true,
        description: 'Enter Your Username',
        nullable: false
    })
    @IsString()
    username: string;

    @ApiProperty({
        required: true,
        description: 'Enter Your Email',
        nullable: false
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
        description: 'Enter Your Password',
        nullable: false,
        minLength: 6,
        maxLength: 50
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches( /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({
        required: true,
        description: 'Enter Your Full Name',
        nullable: false,
        minLength: 4
    })
    @IsString()
    @MinLength(4)
    fullName: string;
}