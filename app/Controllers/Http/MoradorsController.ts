// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Morador from "App/Models/Morador"
import MoradorValidator from "App/Validators/MoradorValidator"

export default class MoradorsController {
    index() {
        return Morador.query()
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
