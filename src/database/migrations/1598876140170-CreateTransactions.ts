import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTransactions1598876140170
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'title',
            type: 'varchar',
          },

          {
            name: 'type',
            type: 'varchar',
          },

          {
            name: 'value',
            // O tipo decimal no postgres recebe 2 paramêtros
            type: 'decimal',
            // O valor pode ter 10 digitos do lado esquerdo
            precision: 10,
            // 2 digitdos do lado direito
            scale: 2,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
