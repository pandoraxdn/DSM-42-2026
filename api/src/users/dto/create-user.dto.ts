import { IsString, MaxLength, MinLength, IsDateString, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @MaxLength(255)
  @MinLength(5)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(255)
  @MinLength(5)
  password: string;

  @IsString()
  image: string;

  @IsDateString()
  @IsOptional()
  update: Date;
}
