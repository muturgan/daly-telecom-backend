import { Column, Entity, PrimaryGeneratedColumn, ValueTransformer } from 'typeorm';

const boxesTransformer: ValueTransformer = {
   to(val?: string[] | null): string | null {
      if (Array.isArray(val) !== true) {
         return null;
      }
      return JSON.stringify(val);
   },

   from(val: string): string[] {
      try {
         if (!val) {
            return [];
         }

         const parsed: string[] = JSON.parse(val);
         return parsed;
      }
      catch (err) {
         console.info('somefing wrong at the boxesTransformer.from');
         console.info('value is:');
         console.info(val);
         console.info('error:');
         console.info(err);
         return [];
      }
   },
};

const TABLE_NAME = 'Users';

@Entity(TABLE_NAME)
export class UserEntity {
   public static readonly TABLE_NAME = TABLE_NAME;

   @PrimaryGeneratedColumn({type: 'int', unsigned: true})
   public id!: number;

   @Column({type: 'varchar', length: 64, nullable: true, default: null})
   public name?: string | null;

   @Column({type: 'varchar', length: 64, nullable: true, default: null})
   public address?: string | null;

   @Column({type: 'varchar', length: 16, nullable: true, default: null})
   public phone?: string | null;

   @Column({type: 'varchar', length: 16, nullable: true, default: null})
   public mobile?: string | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public kross?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public magistral?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public raspred?: number | null;

   @Column({type: 'int', unsigned: true, nullable: true, default: null})
   public adsl?: number | null;

   @Column({type: 'text', transformer: boxesTransformer, nullable: true, default: null})
   public boxes?: string[] | null;

   @Column({type: 'double', nullable: true, default: null})
   public latitude?: number | null;

   @Column({type: 'double', nullable: true, default: null})
   public longitude?: number | null;
}
