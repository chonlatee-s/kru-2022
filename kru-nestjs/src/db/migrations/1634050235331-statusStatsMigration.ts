import {MigrationInterface, QueryRunner} from "typeorm";

export class statusStatsMigration1634050235331 implements MigrationInterface {
    name = 'statusStatsMigration1634050235331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` ADD \`status\` char NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` DROP COLUMN \`status\``);
    }

}
