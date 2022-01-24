import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

const TABLE_NAME = 'Engineers';

@Entity(TABLE_NAME)
export class EngineerEntity {
   public static readonly TABLE_NAME = TABLE_NAME;

   @PrimaryGeneratedColumn({type: 'int', unsigned: true})
   public id!: number;

   @Column({type: 'varchar', length: 16, unique: true, nullable: false})
   public login!: string;

   @Column({type: 'char', length: 11, unique: true, nullable: false})
   public phone!: string;
}
