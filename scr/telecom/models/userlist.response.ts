import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from './user.entity';

export class UserList
{
   @ApiProperty({type: [UserEntity]})
   public users!: UserEntity[];
}
