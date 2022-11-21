// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Morador from "App/Models/Morador"
import MoradorValidator from "App/Validators/MoradorValidator"

export default class MoradorsController {
    async index({ request }) {

        const id = request.param('id')
        const { apartamentoId, nome, cpf } = await request.validade(MoradorValidator)

        const moradors = Morador.query().preload('apartamento').select('id', 'nome', 'apartamentoId', 'cpf')

        if (apartamentoId) {
            moradors.where('apartamentoId', apartamentoId)
        }

        if (id) {
            moradors.where('id', id)
        }

        if (nome) {
            moradors.where('nome', 'like', '%' + nome + '%')
        }

        if (cpf) {
            moradors.where('cpf', 'like', cpf + '%')
        }
        
        return moradors
    }

    async store({ request }) {

        const dados = await request.validade(MoradorValidator)

        return Morador.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Morador.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const morador = await Morador.findOrFail(id)

        return morador.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(MoradorValidator)
        const morador = await Morador.findOrFail(id)

        morador.merge(dados)
        return morador.save()

    }
}
