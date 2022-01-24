import { ApiProperty } from '@nestjs/swagger';
import { AbonentEntity } from './abonent.entity';

export class AbonentList
{
   @ApiProperty({type: [AbonentEntity]})
   public abonents!: AbonentEntity[];
}
