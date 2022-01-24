import { ApiProperty } from '@nestjs/swagger';

export class Success
{
   @ApiProperty({type: Boolean})
   public readonly success!: boolean;
}
