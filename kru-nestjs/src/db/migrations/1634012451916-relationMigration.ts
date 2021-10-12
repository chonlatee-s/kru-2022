import {MigrationInterface, QueryRunner} from "typeorm";

export class relationMigration1634012451916 implements MigrationInterface {
    name = 'relationMigration1634012451916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`stats\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`userId\` int NOT NULL, \`score\` int NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_c79b64ca98cb6eab3cd7825b86\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` ADD CONSTRAINT \`FK_071bcb8dd9f9511a3880c34c385\` FOREIGN KEY (\`userId\`) REFERENCES \`kru\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` DROP FOREIGN KEY \`FK_071bcb8dd9f9511a3880c34c385\``);
        await queryRunner.query(`DROP INDEX \`IDX_c79b64ca98cb6eab3cd7825b86\` ON \`kru\`.\`stats\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`stats\``);
    }

}
