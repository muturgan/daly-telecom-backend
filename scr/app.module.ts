import { Module } from '@nestjs/common';
import { TelecomModule } from './telecom/telecom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbonentEntity, EngineerEntity } from './telecom/models';
import { config } from './config';

@Module({
   imports: [
      TelecomModule,
      TypeOrmModule.forRoot({
         type: 'mysql',
         host: config.DB_HOST,
         port: config.DB_PORT,
         database: config.DB_NAME,
         username: config.DB_USER,
         password: config.DB_PASS,
         entities: [AbonentEntity, EngineerEntity],
         synchronize: true,
      }),
   ],
})
export class AppModule {}
