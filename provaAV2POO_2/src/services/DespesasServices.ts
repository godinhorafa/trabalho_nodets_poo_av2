import { getCustomRepository } from 'typeorm'
//import { Despesas } from '../entities/Despesas'
import { DespesasRepository } from '../repositories/DespesasRepository'


interface IDespesasCreate {
    id_responsavel: string;
    valor: number;
    data_compra: Date;
    local: string;
}

interface IDespesasShow {
    id: string;
}

interface IDespesasUpdate {
    id: string;
    id_responsavel: string;
    valor: number;
    data_compra: Date;
    local: string;
}

class DespesasServices {

    async create({ id_responsavel, valor, data_compra, local}: IDespesasCreate){
        const despesasRepository = getCustomRepository(DespesasRepository)
        
        /*
        const idAlreadyExists = await despesasRepository.findOne({
            id
        })

        if(idAlreadyExists) {
            throw new Error('Id alredy exists!')
        }*/

        const despesas = despesasRepository.create({
            id_responsavel,
            valor,
            data_compra,
            local
        })

        await despesasRepository.save(despesas)

        return despesas
    }

    async index() {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.find({
            relations: ['responsavel']
        })
        return despesas
    }

    async show({ id }: IDespesasShow) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne(id, {
            relations: ['responsavel']
        })

        if(!despesas) {
            throw new Error('Id not found!')
        }

        return despesas 
    }

    async delete({ id }: IDespesasShow) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        const despesas = await despesasRepository.findOne({ id })

        if(!despesas) {
            throw new Error('Despesa Id not found!')
        }

        return await despesasRepository.delete({ id })
    }

    async update({ id, id_responsavel, valor, data_compra, local}: IDespesasUpdate) {
        const despesasRepository = getCustomRepository(DespesasRepository)

        let despesa = await despesasRepository.findOne({ id })

        if(!despesa) {
            throw new Error('Despesa Id not found!')
        }

        const despesaUpdated = despesasRepository.update(id, {
            id_responsavel,
            valor,
            data_compra,
            local
        })

        despesa = await despesasRepository.findOne(id)

        return despesa 
    }
}

export { DespesasServices }
