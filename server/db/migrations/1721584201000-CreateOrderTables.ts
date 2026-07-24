import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateOrderTables1721584201000 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'orders',
            columns: [
               { name: 'id', type: 'text', isPrimary: true },
               { name: 'customerEmail', type: 'text', isNullable: false },
               { name: 'paymentMethod', type: 'text', isNullable: false },
               { name: 'totalAmount', type: 'real', isNullable: false },
               { name: 'currency', type: 'text', default: "'NGN'" },
               { name: 'status', type: 'text', default: "'pending'" },
               { name: 'paymentDetails', type: 'text', isNullable: true },
               { name: 'proofFiles', type: 'text', isNullable: true },
               { name: 'transactionId', type: 'text', isNullable: true },
               { name: 'userAgent', type: 'text', isNullable: true },
               { name: 'timezone', type: 'text', isNullable: true },
               { name: 'createdAt', type: 'datetime', default: 'CURRENT_TIMESTAMP' },
               { name: 'updatedAt', type: 'datetime', default: 'CURRENT_TIMESTAMP' },
            ],
         }),
         true
      )

      await queryRunner.createTable(
         new Table({
            name: 'order_items',
            columns: [
               { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
               { name: 'orderId', type: 'text', isNullable: false },
               { name: 'productId', type: 'text', isNullable: false },
               { name: 'productName', type: 'text', isNullable: false },
               { name: 'license', type: 'text', isNullable: false },
               { name: 'price', type: 'real', isNullable: false },
            ],
         }),
         true
      )

      await queryRunner.createForeignKey(
         'order_items',
         new TableForeignKey({
            columnNames: ['orderId'],
            referencedTableName: 'orders',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('order_items', true)
      await queryRunner.dropTable('orders', true)
   }
}
