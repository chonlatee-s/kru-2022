import {MigrationInterface, QueryRunner} from "typeorm";

export class userMigration1632576654043 implements MigrationInterface {
    name = 'userMigration1632576654043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`major\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`major\``);
    }

}
