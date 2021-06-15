import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDespesas1623696237608 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "despesas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_responsavel",
                        type: "uuid"
                    },
                    {
                        name: "valor",
                        type: "number"
                    },
                    {
                        name: "data_compra",
                        type: "Date"
                    },
                    {
                        name: "local",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKResponsavel',
                        referencedTableName: 'responsavel',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_responsavel'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('despesas')
    }

}


