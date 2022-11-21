import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Apartamento from 'App/Models/Apartamento'

export default class extends BaseSeeder {
  public async run () {
    await Apartamento.createMany([
      {nome: 'AB 101', tamanho: '100 metros2', andarId: 1}
    ])
  }
}
