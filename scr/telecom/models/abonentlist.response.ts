import { ApiProperty } from '@nestjs/swagger';
import { AbonentEntity } from './abonent.entity';

export class AbonentList
{
   @ApiProperty({type: [AbonentEntity]})
   public abonents!: AbonentEntity[];

   @ApiProperty({type: 'integer'})
   public total!: number;

   @ApiProperty({type: 'integer'})
   public pageNumber!: number;

   @ApiProperty({type: 'integer'})
   public pageSize!: number;
}
