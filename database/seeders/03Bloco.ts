import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Bloco from 'App/Models/Bloco'

export default class extends BaseSeeder {
  public async run () {
    await Bloco.createMany([
      
    ])
  }
}
