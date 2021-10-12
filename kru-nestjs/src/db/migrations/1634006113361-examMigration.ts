import {MigrationInterface, QueryRunner} from "typeorm";

export class examMigration1634006113361 implements MigrationInterface {
    name = 'examMigration1634006113361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`img\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`img\``);
    }

}
