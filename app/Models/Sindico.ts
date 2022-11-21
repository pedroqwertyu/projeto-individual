import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Condominio from './Condominio'

export default class Sindico extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string

  @column()
  public cep: number

  @column()
  public cpf: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=> Condominio )
  public condominios: HasMany<typeof Condominio>
}
