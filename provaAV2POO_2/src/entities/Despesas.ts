import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne  } from 'typeorm'

import { v4 as uuid} from 'uuid'
import { Responsavel } from './Responsavel'

/* A tabela de despesas deverá conter os seguinte campos: id, data da compra,
local da compra, valor, id do responsavel, created_at e updted_at */
@Entity('despesas')
class Despesas {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'id_responsavel'})
    @ManyToOne(() => Responsavel)
    responsavel: Responsavel;

    @Column()
    id_responsavel: string;

    @Column()
    valor: number;

    @Column()
    data_compra: Date;

    @Column()
    local: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Despesas }