import {MigrationInterface, QueryRunner} from "typeorm";

export class addTypeMigration1634445244211 implements MigrationInterface {
    name = 'addTypeMigration1634445244211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`type\` char NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`type\``);
    }

}
