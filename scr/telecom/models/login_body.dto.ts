import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginBodyDto
{
   @ApiProperty({type: String})
   @IsString()
   @IsNotEmpty()
   public readonly login!: string;

   @ApiProperty({type: String})
   @IsString()
   @IsNotEmpty()
   public readonly password!: string;
}
