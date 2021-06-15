import { EntityRepository, Repository } from 'typeorm'
import { Despesas } from '../entities/Despesas'

@EntityRepository(Despesas)
class DespesasRepository extends Repository<Despesas> {

}

export { DespesasRepository }