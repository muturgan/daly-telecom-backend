import { ApiProperty } from '@nestjs/swagger';

export class CreatedAbonentID
{
   @ApiProperty({type: 'integer'})
   public id!: number;
}
