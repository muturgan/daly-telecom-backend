import { MigrationInterface, QueryRunner } from 'typeorm';

export class Abonents1643052479096 implements MigrationInterface
{
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(

      `CREATE TABLE IF NOT EXISTS Abonents (
         \`id\`        int unsigned PRIMARY KEY AUTO_INCREMENT,
         \`name\`      varchar(64) DEFAULT NULL,
         \`address\`   varchar(64) DEFAULT NULL,
         \`phone\`     varchar(16) DEFAULT NULL,
         \`mobile\`    varchar(16) DEFAULT NULL,
         \`kross\`     int unsigned DEFAULT NULL,
         \`magistral\` int unsigned DEFAULT NULL,
         \`raspred\`   int unsigned DEFAULT NULL,
         \`adsl\`      int unsigned DEFAULT NULL,
         \`boxes\`     text,
         \`latitude\`  double DEFAULT NULL,
         \`longitude\` double DEFAULT NULL
      )
      ENGINE = InnoDB
      CHARACTER SET 'utf8'
      COLLATE 'utf8_general_ci'

      `);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         'DROP TABLE IF EXISTS Abonents',
      );
   }
}
