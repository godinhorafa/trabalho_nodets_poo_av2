import { getCustomRepository } from 'typeorm'
import { ResponsavelRepository } from '../repositories/ResponsavelRepository'

interface IResponsavelCreate {
    id: string;
    nome: string;
    telefone: string
}


class ResponsavelServices {

    /* a) Crie uma rota (/responsavel) para cadastrar o nome dos responsáveis pelos gastos. 
    Deverá ser enviado um json contendo o nome do responsável e o telefone. */
    async create({ id, nome, telefone }: IResponsavelCreate) {
        const responsavelRepository = getCustomRepository(ResponsavelRepository)

        const idAlreadyExists = await responsavelRepository.findOne({
            id
        })

        if(idAlreadyExists) {
            throw new Error('Id alredy exists!')
        }

        const responsavel = responsavelRepository.create({
            id,
            nome, 
            telefone
        })

        await responsavelRepository.save(responsavel)

        return responsavel
    }

    /*b) Crie uma rota (/responsavel) para listar todos os responsáveis pelos gastos. 
    Deverá ser retornado um json contendo o id, nome do responsável e o telefone. */
    async index() {
        const responsavelRepository = getCustomRepository(ResponsavelRepository)

        const responsavel = await responsavelRepository.find()

        return responsavel
    }
}

export { ResponsavelServices }