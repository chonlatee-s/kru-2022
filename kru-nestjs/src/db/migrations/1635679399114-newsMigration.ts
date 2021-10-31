import {MigrationInterface, QueryRunner} from "typeorm";

export class newsMigration1635679399114 implements MigrationInterface {
    name = 'newsMigration1635679399114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`news\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`news\` text NOT NULL, \`ref\` text NOT NULL, \`slide\` varchar(5) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_008b06099af0ead92d8d4e9341\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`detail\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`updateAt\` \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP INDEX \`IDX_008b06099af0ead92d8d4e9341\` ON \`kru\`.\`news\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`news\``);
    }

}
