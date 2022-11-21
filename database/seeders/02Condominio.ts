import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Condominio from 'App/Models/Condominio'

export default class extends BaseSeeder {
  public async run () {
    await Condominio.createMany([
      
    ])
  }
}
