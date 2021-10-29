import {MigrationInterface, QueryRunner} from "typeorm";

export class editAnswerExam1635500484913 implements MigrationInterface {
    name = 'editAnswerExam1635500484913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`answer\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`answer\` char NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` DROP COLUMN \`answer\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`exam\` ADD \`answer\` varchar(255) NOT NULL`);
    }

}
