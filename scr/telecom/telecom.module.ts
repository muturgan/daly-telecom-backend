import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelecomController } from './telecom.controller';
import { UserEntity } from './models';

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
