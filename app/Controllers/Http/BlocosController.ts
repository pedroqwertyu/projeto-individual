// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bloco from "App/Models/Bloco"
import BlocoValidator from "App/Validators/BlocoValidator"

export default class BlocosController {
    index() {
        return Bloco.query()
    }

    async store({ request }) {

        const dados = await request.validade(BlocoValidator)

        return Bloco.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Bloco.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const bloco = await Bloco.findOrFail(id)

        return bloco.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(BlocoValidator)
        const bloco = await Bloco.findOrFail(id)

        bloco.merge(dados)
        return bloco.save()

    }
}
