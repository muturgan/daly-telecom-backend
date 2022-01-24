import { ApiProperty } from '@nestjs/swagger';
import { AbonentEntity } from './abonent.entity';

export class UserList
{
   @ApiProperty({type: [AbonentEntity]})
   public readonly users!: AbonentEntity[];
}
