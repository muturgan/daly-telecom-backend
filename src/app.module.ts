import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TelecomModule } from './telecom/telecom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AbonentEntity, EngineerEntity } from './telecom/models';
import { config } from './config';
import path = require('path');


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
         migrations: [path.join(__dirname, 'migrations', '*')],
      }),
   ],
})
export class AppModule implements OnApplicationBootstrap {
   constructor(
      private readonly conn: Connection,
   ) {}

   public async onApplicationBootstrap(): Promise<void> {
      const migs = await this.conn.runMigrations();
      console.info(`Successully completed ${migs.length} migrations`);
   }
}
