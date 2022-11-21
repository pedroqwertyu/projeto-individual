import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sindico from 'App/Models/Sindico'

export default class extends BaseSeeder {
  public async run () {
    await Sindico.createMany([
      
    ])
  }
}
