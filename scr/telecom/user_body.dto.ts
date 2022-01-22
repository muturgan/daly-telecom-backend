import { IsArray, IsInt, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UserBodyDto
{
   @IsString()
   @IsOptional()
   public name?: string | null;

   @IsString()
   @IsOptional()
   public address?: string | null;

   @IsString()
   @IsOptional()
   public phone?: string | null;

   @IsString()
   @IsOptional()
   public mobile?: string | null;

   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public kross?: number | null;

   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public magistral?: number | null;

   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public raspred?: number | null;

   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public adsl?: number | null;

   @IsString({each: true})
   @IsArray()
   @IsOptional()
   public boxes?: string[] | null;

   @IsNumber()
   @IsOptional()
   public latitude?: number | null;

   @IsNumber()
   @IsOptional()
   public longitude?: number | null;
}
