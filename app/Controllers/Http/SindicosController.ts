// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sindico from "App/Models/Sindico"
import SindicoValidator from "App/Validators/SindicoValidator"

export default class SindicosController {
    index() {
        return Sindico.query().preload('condominios')
    }

    async store({ request }) {

        const dados = await request.validate(SindicoValidator)

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
        const dados = await request.validate(SindicoValidator)
        const sindico = await Sindico.findOrFail(id)

        sindico.merge(dados)
        return sindico.save()

    }
}
