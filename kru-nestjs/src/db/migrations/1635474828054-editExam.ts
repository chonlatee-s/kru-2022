import {MigrationInterface, QueryRunner} from "typeorm";

export class editExam1635474828054 implements MigrationInterface {
    name = 'editExam1635474828054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`type\` char NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`type\` varchar(255) NOT NULL`);
    }

}
