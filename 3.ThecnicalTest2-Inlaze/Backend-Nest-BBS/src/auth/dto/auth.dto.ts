import { IsString, MinLength, Matches } from 'class-validator';

export class authDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must contain at least one uppercase letter, one lowercase letter, and one number or special character.',
  })
  password: string;
}
