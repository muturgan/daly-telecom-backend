import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelecomControllerV1 } from './telecom.controller.v1';
import { TelecomControllerV2 } from './telecom.controller.v2';
import { AbonentEntity } from './models';

@Module({
   imports: [
      TypeOrmModule.forFeature([AbonentEntity]),
   ],
   controllers: [
      TelecomControllerV2,
      TelecomControllerV1,
   ],
   providers: [
   ],
})
export class TelecomModule {}
