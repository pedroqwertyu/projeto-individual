import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Andar from 'App/Models/Andar'

export default class extends BaseSeeder {
  public async run () {
    await Andar.createMany([
      {blocoId: 1, manutencao: 'jose da silva junior'}
    ])
  }
}
