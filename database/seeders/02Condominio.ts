import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Condominio from 'App/Models/Condominio'

export default class extends BaseSeeder {
  public async run () {
    await Condominio.createMany([
      {nome: 'arniqueiras', endereco: 'qnp 432 conjunto Z area especial E', cep: 63035490, sindicoId: 1}
    ])
  }
}
