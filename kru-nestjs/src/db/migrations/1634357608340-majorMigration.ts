import {MigrationInterface, QueryRunner} from "typeorm";

export class majorMigration1634357608340 implements MigrationInterface {
    name = 'majorMigration1634357608340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`major\` \`majorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`major\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`major\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_0b322ed9115160b00a5f38e878\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`majorId\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`majorId\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP COLUMN \`majorId\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD \`majorId\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_0b322ed9115160b00a5f38e878\` ON \`kru\`.\`major\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`major\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` CHANGE \`majorId\` \`major\` varchar(255) NOT NULL`);
    }

}
