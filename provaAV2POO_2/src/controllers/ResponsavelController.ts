import { Request, response, Response } from 'express'
import { ResponsavelServices } from '../services/ResponsavelServices'

class ResponsavelController {

    async create(request: Request, response: Response) {
        const { id, nome, telefone } = request.body
        
        const responsavelServices = new ResponsavelServices()

        try {
            const responsavel = await responsavelServices.create({ id, nome, telefone })
            return response.json(responsavel)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(request: Request, response: Response) {
        const responsavelServices = new ResponsavelServices()

        try{
            const responsavel = await responsavelServices.index()
            return response.json(responsavel)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
}

export { ResponsavelController }