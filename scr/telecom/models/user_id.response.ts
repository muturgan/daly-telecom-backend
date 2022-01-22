import { ApiProperty } from '@nestjs/swagger';

export class CreatedUserID
{
   @ApiProperty({type: 'integer'})
   public id!: number;
}
