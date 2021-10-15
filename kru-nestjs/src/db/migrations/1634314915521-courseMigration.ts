import {MigrationInterface, QueryRunner} from "typeorm";

export class courseMigration1634314915521 implements MigrationInterface {
    name = 'courseMigration1634314915521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`img\` varchar(255) NOT NULL, \`topic\` varchar(255) NOT NULL, \`detail\` text NOT NULL, \`ref\` text NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_85870cd3342d01a91fce6c4ba7\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_85870cd3342d01a91fce6c4ba7\` ON \`kru\`.\`course\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`course\``);
    }

}
