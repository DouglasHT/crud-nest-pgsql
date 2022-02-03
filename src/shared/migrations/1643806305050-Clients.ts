import { MigrationInterface, QueryRunner } from 'typeorm'

export class Clients1643806305050 implements MigrationInterface {
  name = 'Clients1643806305050'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "client" ("id_client" integer NOT NULL, "name" character varying(150) NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying(20) NOT NULL, "street" character varying(150) NOT NULL, "number" character varying(10) NOT NULL, "district" character varying(150) NOT NULL, "city" character varying(150) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_83f4571a0e37e3822fff36d6b8a" PRIMARY KEY ("id_client"))`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "client"`)
  }
}
