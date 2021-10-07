import {MigrationInterface, QueryRunner} from "typeorm";

export class jobMigration1633590757722 implements MigrationInterface {
    name = 'jobMigration1633590757722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`job\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`topic\` varchar(255) NOT NULL, \`ref\` varchar(255) NOT NULL, \`dateExpire\` datetime NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_70c5ff6d2f1f57dc6f94ce752c\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_70c5ff6d2f1f57dc6f94ce752c\` ON \`kru\`.\`job\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`job\``);
    }

}
