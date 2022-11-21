import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Morador from 'App/Models/Morador'

export default class extends BaseSeeder {
  public async run () {
    await Morador.createMany([
      {nome: 'junior joar da silva', apartamentoId: 1, cpf: '93106764098'}
    ])
  }
}
