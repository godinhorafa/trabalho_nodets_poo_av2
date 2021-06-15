import { Router } from 'express'

import { ResponsavelController } from './controllers/ResponsavelController'

import { DespesasController } from './controllers/DespesasController'

const routes = Router();

const responsavelController = new ResponsavelController()

const despesasController = new DespesasController()

/*
A tabela responsável deverá conter os seguintes campos: id, nome do
responsável, telefone, created_at e updated_at
A tabela de despesas deverá conter os seguinte campos: id, data da compra,
local da compra, valor, id do responsavel, created_at e updted_at
a) Crie uma rota (/responsavel) para cadastrar o nome dos responsáveis pelos
gastos. Deverá ser enviado um json contendo o nome do responsável e o
telefone.
b) Crie uma rota (/responsavel) para listar todos os responsáveis pelos gastos.
Deverá ser retornado um json contendo o id, nome do responsável e o telefone
*/


routes.post('/responsavel', responsavelController.create)
routes.get('/responsavel', responsavelController.index)

routes.post('/despesas', despesasController.create)
routes.get('/despesas', despesasController.index)
routes.get('/despesas/:id', despesasController.show)
routes.delete('/despesas/:id', despesasController.delete)
routes.put('/despesas/:id', despesasController.update)

//rota - controller - service

export { routes }