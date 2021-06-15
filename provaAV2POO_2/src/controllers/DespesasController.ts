import { Request, Response } from 'express'
//import { Despesas } from '../entities/Despesas'
import { DespesasServices } from '../services/DespesasServices'

class DespesasController {
    async create(request: Request, response: Response) {
        let { id_responsavel, valor, data_compra, local } = request.body
        data_compra = new Date(data_compra)

        const despesasServices = new DespesasServices()

        const despesas = await despesasServices.create({ id_responsavel, valor, data_compra, local })

        return response.json(despesas)
    }

    async index(request: Request, response: Response) {
        const despesasServices = new DespesasServices()

        try {
            const despesas = await despesasServices.index()
            return response.json(despesas)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }

    async show(request:Request, response:Response) {
        const despesasServices = new DespesasServices()
        const { id } = request.params

        try {
            const despesas = await despesasServices.show({ id })
            return response.json(despesas)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }

    async delete(request: Request, response: Response) {
        const despesasServices = new DespesasServices()
        const { id } = request.params

        try {
            await despesasServices.delete({ id })
            return response.json({ message: 'Despesa Id deleted successfully'})
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
    async update(request: Request, response: Response) {
        let { id_responsavel, valor, data_compra, local } = request.body
        data_compra = new Date(data_compra)
        const { id } = request.params
    
        const despesasServices = new DespesasServices()
    
        try {
          const despesas = await despesasServices.update({ id, id_responsavel, valor, data_compra, local })
          return response.json(despesas)
        } catch(err) {
          return response
            .status(400)
            .json({ message: err.message })
        }
      } 
}

export { DespesasController }