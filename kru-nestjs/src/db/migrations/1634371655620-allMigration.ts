import {MigrationInterface, QueryRunner} from "typeorm";

export class allMigration1634371655620 implements MigrationInterface {
    name = 'allMigration1634371655620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`kru\`.\`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`img\` varchar(255) NOT NULL, \`topic\` varchar(255) NOT NULL, \`detail\` text NOT NULL, \`ref\` text NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_85870cd3342d01a91fce6c4ba7\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`download\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`topic\` varchar(255) NOT NULL, \`ref\` text NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2d560c5d59d649193478dde266\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`img\` varchar(255) NOT NULL, \`question\` varchar(255) NOT NULL, \`choice1\` varchar(255) NOT NULL, \`choice2\` varchar(255) NOT NULL, \`choice3\` varchar(255) NOT NULL, \`choice4\` varchar(255) NOT NULL, \`answer\` varchar(255) NOT NULL, \`ref\` text NOT NULL, \`type\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_54e10ae60911c48051922bdbb7\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`major\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`major\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_0b322ed9115160b00a5f38e878\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`stats\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`userId\` int NOT NULL, \`score\` int NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_c79b64ca98cb6eab3cd7825b86\` (\`uuId\`), UNIQUE INDEX \`REL_071bcb8dd9f9511a3880c34c38\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`generateId\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`fullname\` varchar(255) NOT NULL, \`profile\` varchar(255) NOT NULL, \`score\` int NOT NULL, \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`majorId\` int NOT NULL, UNIQUE INDEX \`IDX_5c86b7794f9882001aadeab6e4\` (\`uuId\`), UNIQUE INDEX \`REL_6d529e7f25a03e0e903a314967\` (\`majorId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`forum\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`topic\` varchar(255) NOT NULL, \`userId\` int NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_4406746e259405498b0bbba1c5\` (\`uuId\`), UNIQUE INDEX \`REL_6bc7be7395d60f4de274ba3a19\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kru\`.\`job\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuId\` char(36) NOT NULL, \`topic\` varchar(255) NOT NULL, \`ref\` text NOT NULL, \`dateExpire\` datetime NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_70c5ff6d2f1f57dc6f94ce752c\` (\`uuId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` ADD CONSTRAINT \`FK_071bcb8dd9f9511a3880c34c385\` FOREIGN KEY (\`userId\`) REFERENCES \`kru\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` ADD CONSTRAINT \`FK_6d529e7f25a03e0e903a314967f\` FOREIGN KEY (\`majorId\`) REFERENCES \`kru\`.\`major\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` ADD CONSTRAINT \`FK_6bc7be7395d60f4de274ba3a19e\` FOREIGN KEY (\`userId\`) REFERENCES \`kru\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`kru\`.\`forum\` DROP FOREIGN KEY \`FK_6bc7be7395d60f4de274ba3a19e\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`user\` DROP FOREIGN KEY \`FK_6d529e7f25a03e0e903a314967f\``);
        await queryRunner.query(`ALTER TABLE \`kru\`.\`stats\` DROP FOREIGN KEY \`FK_071bcb8dd9f9511a3880c34c385\``);
        await queryRunner.query(`DROP INDEX \`IDX_70c5ff6d2f1f57dc6f94ce752c\` ON \`kru\`.\`job\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`job\``);
        await queryRunner.query(`DROP INDEX \`REL_6bc7be7395d60f4de274ba3a19\` ON \`kru\`.\`forum\``);
        await queryRunner.query(`DROP INDEX \`IDX_4406746e259405498b0bbba1c5\` ON \`kru\`.\`forum\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`forum\``);
        await queryRunner.query(`DROP INDEX \`REL_6d529e7f25a03e0e903a314967\` ON \`kru\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_5c86b7794f9882001aadeab6e4\` ON \`kru\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`user\``);
        await queryRunner.query(`DROP INDEX \`REL_071bcb8dd9f9511a3880c34c38\` ON \`kru\`.\`stats\``);
        await queryRunner.query(`DROP INDEX \`IDX_c79b64ca98cb6eab3cd7825b86\` ON \`kru\`.\`stats\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`stats\``);
        await queryRunner.query(`DROP INDEX \`IDX_0b322ed9115160b00a5f38e878\` ON \`kru\`.\`major\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`major\``);
        await queryRunner.query(`DROP INDEX \`IDX_54e10ae60911c48051922bdbb7\` ON \`kru\`.\`exam\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`exam\``);
        await queryRunner.query(`DROP INDEX \`IDX_2d560c5d59d649193478dde266\` ON \`kru\`.\`download\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`download\``);
        await queryRunner.query(`DROP INDEX \`IDX_85870cd3342d01a91fce6c4ba7\` ON \`kru\`.\`course\``);
        await queryRunner.query(`DROP TABLE \`kru\`.\`course\``);
    }

}
