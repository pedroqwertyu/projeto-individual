import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sindico from 'App/Models/Sindico'

export default class extends BaseSeeder {
  public async run () {
    await Sindico.createMany([
      {nome: 'jo soares', cep: 63037490, cpf: '93408764098'}
    ])
  }
}
