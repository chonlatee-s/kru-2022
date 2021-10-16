import {MigrationInterface, QueryRunner} from "typeorm";

export class updateAtForumMigration1634373980253 implements MigrationInterface {
    name = 'updateAtForumMigration1634373980253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` ADD \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` DROP COLUMN \`updateAt\``);
    }

}
