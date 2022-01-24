import { IsArray, IsInt, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class AbonentBodyDto
{
   @ApiPropertyOptional({type: String})
   @IsString()
   @IsOptional()
   public name?: string | null;

   @ApiPropertyOptional({type: String})
   @IsString()
   @IsOptional()
   public address?: string | null;

   @ApiPropertyOptional({type: String})
   @IsString()
   @IsOptional()
   public phone?: string | null;

   @ApiPropertyOptional({type: String})
   @IsString()
   @IsOptional()
   public mobile?: string | null;

   @ApiPropertyOptional({type: 'integer'})
   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public kross?: number | null;

   @ApiPropertyOptional({type: 'integer'})
   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public magistral?: number | null;

   @ApiPropertyOptional({type: 'integer'})
   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public raspred?: number | null;

   @ApiPropertyOptional({type: 'integer'})
   @IsPositive()
   @IsInt()
   @IsNumber()
   @IsOptional()
   public adsl?: number | null;

   @ApiPropertyOptional({type: [String]})
   @IsString({each: true})
   @IsArray()
   @IsOptional()
   public boxes?: string[] | null;

   @ApiPropertyOptional({type: Number, format: 'double', example: 37.586452})
   @IsNumber()
   @IsOptional()
   public latitude?: number | null;

   @ApiPropertyOptional({type: Number, format: 'double', example: 54.166907})
   @IsNumber()
   @IsOptional()
   public longitude?: number | null;
}
