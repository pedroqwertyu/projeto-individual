// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Condominio from "App/Models/Condominio"
import CondominioValidator from "App/Validators/CondominioValidator"

export default class CondominiosController {
    index() {
        return Condominio.query().preload('sindico').preload('blocos')
    }

    async store({ request }) {

        const dados = await request.validate(CondominioValidator)

        return Condominio.create(dados)

    }

    show({ request }) {

        const id = request.param('id')

        return Condominio.findOrFail(id)

    }

    async destroy({ request }) {

        const id = request.param('id')
        const condominio = await Condominio.findOrFail(id)

        return condominio.delete()

    }

    async update({ request }) {

        const id = request.param('id')
        const dados = await request.validate(CondominioValidator)
        const condominio = await Condominio.findOrFail(id)

        condominio.merge(dados)
        return condominio.save()

    }
}
