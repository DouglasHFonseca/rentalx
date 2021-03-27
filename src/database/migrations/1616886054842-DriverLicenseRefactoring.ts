import { MigrationInterface, QueryRunner } from "typeorm";

export class DriverLicenseRefactoring1616886054842
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "driver_livense" TO "driver_license"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "driver_license" TO "driver_livense"`
    );
  }
}
