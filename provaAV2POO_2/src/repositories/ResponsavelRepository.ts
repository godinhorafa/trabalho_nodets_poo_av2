import { Repository, EntityRepository } from 'typeorm'
import { Responsavel } from '../entities/Responsavel'

@EntityRepository(Responsavel)
class ResponsavelRepository extends Repository<Responsavel> {

}

export { ResponsavelRepository }