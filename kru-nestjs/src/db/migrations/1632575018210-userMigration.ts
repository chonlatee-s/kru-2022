import {MigrationInterface, QueryRunner} from "typeorm";

export class userMigration1632575018210 implements MigrationInterface {
    name = 'userMigration1632575018210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`generateId\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`fullname\` varchar(255) NOT NULL, \`profile\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_5c86b7794f9882001aadeab6e4\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_5c86b7794f9882001aadeab6e4\` ON \`kru\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`user\``);
    }

}
