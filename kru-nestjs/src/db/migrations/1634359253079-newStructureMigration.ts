import {MigrationInterface, QueryRunner} from "typeorm";

export class newStructureMigration1634359253079 implements MigrationInterface {
    name = 'newStructureMigration1634359253079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`score\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`createAt\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`updateAt\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`score\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` ADD \`status\` char NOT NULL`);
    }

}
