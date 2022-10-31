import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  username: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(8)
  password: string;
}
