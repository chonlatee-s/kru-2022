import {MigrationInterface, QueryRunner} from "typeorm";

export class refMigration1634009555281 implements MigrationInterface {
    name = 'refMigration1634009555281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`download\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`download\` ADD \`ref\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`ref\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`job\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`job\` ADD \`ref\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`job\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`job\` ADD \`ref\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`ref\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`download\` DROP COLUMN \`ref\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`download\` ADD \`ref\` varchar(255) NOT NULL`);
    }

}
