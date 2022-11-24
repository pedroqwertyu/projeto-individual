// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Andar from "App/Models/Andar"
import AndarValidator from "App/Validators/AndarValidator"

export default class AndarsController {
    index() {
        return Andar.query()
    }

    async store({ request }) {

        const dados = await request.validade(AndarValidator)

        return Andar.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Andar.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const andar = await Andar.findOrFail(id)

        return andar.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validade(AndarValidator)
        const andar = await Andar.findOrFail(id)

        andar.merge(dados)
        return andar.save()

    }

}
