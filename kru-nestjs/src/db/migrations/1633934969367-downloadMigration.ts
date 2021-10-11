import {MigrationInterface, QueryRunner} from "typeorm";

export class downloadMigration1633934969367 implements MigrationInterface {
    name = 'downloadMigration1633934969367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`download\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`topic\` varchar(255) NOT NULL, \`ref\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2d560c5d59d649193478dde266\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_2d560c5d59d649193478dde266\` ON \`kru\`.\`download\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`download\``);
    }

}
