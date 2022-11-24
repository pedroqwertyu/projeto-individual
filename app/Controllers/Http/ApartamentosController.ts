// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Apartamento from "App/Models/Apartamento"
import ApartamentoValidator from "App/Validators/ApartamentoValidator"

export default class ApartamentosController {
    index() {
        return Apartamento.query()
    }

    async store({ request }) {

        const dados = await request.validade(ApartamentoValidator)

        return Apartamento.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Apartamento.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const apartamento = await Apartamento.findOrFail(id)

        return apartamento.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(ApartamentoValidator)
        const apartamento = await Apartamento.findOrFail(id)

        apartamento.merge(dados)
        return apartamento.save()

    }
}
