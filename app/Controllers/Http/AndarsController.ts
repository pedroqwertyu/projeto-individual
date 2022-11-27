// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Andar from "App/Models/Andar"
import AndarValidator from "App/Validators/AndarValidator"

export default class AndarsController {
    index() {
        return Andar.query().preload('apartamentos')
    }

    async store({ request }) {

        const dados = await request.validate(AndarValidator)

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
        const dados = await request.validate(AndarValidator)
        const andar = await Andar.findOrFail(id)

        andar.merge(dados)
        return andar.save()

    }

}
