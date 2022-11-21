// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bloco from "App/Models/Bloco"
import BlocoValidator from "App/Validators/BlocoValidator"

export default class BlocosController {
    async index({ request }) {

        const id = request.param('id')
        const { condominioId, nome, salao } = await request.validade(BlocoValidator)

        const blocos = Bloco.query().preload('condominio').select('id', 'nome', 'condominioId', 'salao')

        if (condominioId) {
            blocos.where('condominioId', condominioId)
        }

        if (id) {
            blocos.where('id', id)
        }

        if (nome) {
            blocos.where('nome', 'like', '%' + nome + '%')
        }

        if (salao) {
            blocos.where('salao', 'like', '%' + salao + '%')
        }
        
        return blocos
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
