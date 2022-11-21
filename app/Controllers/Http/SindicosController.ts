// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sindico from "App/Models/Sindico"
import SindicoValidator from "App/Validators/SindicoValidator"

export default class SindicosController {
    async index({ request }) {

        const id = request.param('id')
        const { cep, nome, cpf } = await request.validade(SindicoValidator)

        const sindicos = Sindico.query().preload('condominios').select('id', 'nome', 'cep', 'cpf')

        if (id) {
            sindicos.where('id', id)
        }
        
        if (cep) {
            sindicos.where('cep', 'like', cep + '%')
        }

        if (nome) {
            sindicos.where('nome', 'like', '%' + nome + '%')
        }

        if (cpf) {
            sindicos.where('cpf', 'like', cpf + '%')
        }
        
        return sindicos
    }

    async store({ request }) {

        const dados = await request.validade(SindicoValidator)

        return Sindico.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Sindico.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const sindico = await Sindico.findOrFail(id)

        return sindico.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(SindicoValidator)
        const sindico = await Sindico.findOrFail(id)

        sindico.merge(dados)
        return sindico.save()

    }
}
