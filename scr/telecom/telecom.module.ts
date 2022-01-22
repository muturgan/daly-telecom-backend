import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelecomController } from './telecom.controller';
import { UserEntity } from './user.entity';

@Module({
   imports: [
      TypeOrmModule.forFeature([UserEntity]),
   ],
   controllers: [
      TelecomController,
   ],
   providers: [
   ],
})
export class TelecomModule {}
