import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColumnLicensePlate1617930419015
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "licence_plate" to "license_plate"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" RENAME COLUMN "license_plate" to "licence_plate"`
    );
  }
}
