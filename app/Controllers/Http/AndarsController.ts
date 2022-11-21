// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Andar from "App/Models/Andar"
import AndarValidator from "App/Validators/AndarValidator"

export default class AndarsController {
    async index({ request }) {

        const id = request.param('id')
        const { blocoId, manutencao } = await request.validade(AndarValidator)

        const andars = Andar.query().preload('bloco').select('id', 'manutencao', 'blocoId')

        if (blocoId) {
            andars.where('blocoId', blocoId)
        }

        if (id) {
            andars.where('id', id)
        }

        if (manutencao) {
            andars.where('manutencao', 'like', '%' + manutencao + '%')
        }
        
        return andars
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
