import { MigrationInterface, QueryRunner } from 'typeorm';

export class Engineers1643053219828 implements MigrationInterface
{
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(

      `CREATE TABLE IF NOT EXISTS Engineers (
         \`id\`        int unsigned PRIMARY KEY AUTO_INCREMENT,
         \`login\`     varchar(16) unique NOT NULL,
         \`phone\`     char(11) unique NOT NULL
      )
      ENGINE = InnoDB
      CHARACTER SET 'utf8'
      COLLATE 'utf8_general_ci'

      `);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
         'DROP TABLE IF EXISTS Engineers',
      );
   }
}
