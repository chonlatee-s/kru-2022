import {MigrationInterface, QueryRunner} from "typeorm";

export class examMigration1634003730598 implements MigrationInterface {
    name = 'examMigration1634003730598'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`question\` varchar(255) NOT NULL, \`choice1\` varchar(255) NOT NULL, \`choice2\` varchar(255) NOT NULL, \`choice3\` varchar(255) NOT NULL, \`choice4\` varchar(255) NOT NULL, \`answer\` varchar(255) NOT NULL, \`ref\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_54e10ae60911c48051922bdbb7\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_54e10ae60911c48051922bdbb7\` ON \`kru\`.\`exam\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`exam\``);
    }

}
