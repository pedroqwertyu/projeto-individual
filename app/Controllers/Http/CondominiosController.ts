// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Condominio from "App/Models/Condominio"
import CondominioValidator from "App/Validators/CondominioValidator"

export default class CondominiosController {
    async index({ request }) {

        const id = request.param('id')
        const { sindicoId, nome, endereco, cep } = await request.validade(CondominioValidator)

        const condominios = Condominio.query().preload('sindico').select('id', 'nome', 'sindicoId', 'endereco', 'cep')

        if (sindicoId) {
            condominios.where('sindicoId', sindicoId)
        }

        if (id) {
            condominios.where('id', id)
        }

        if (nome) {
            condominios.where('nome', 'like', '%' + nome + '%')
        }

        if (endereco) {
            condominios.where('endereco', 'like', '%' + endereco + '%')
        }

        if (cep) {
            condominios.where('cep', 'like', cep + '%')
        }
        
        return condominios
    }

    async store({ request }) {

        const dados = await request.validade(CondominioValidator)

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
        const dados = await request.validade(CondominioValidator)
        const condominio = await Condominio.findOrFail(id)

        condominio.merge(dados)
        return condominio.save()

    }
}
