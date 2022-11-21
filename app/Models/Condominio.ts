import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Sindico from './Sindico'
import Bloco from './Bloco'

export default class Condominio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public endereco: string

  @column()
  public cep: number

  @column()
  public sindicoId: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Sindico )
  public sindico: BelongsTo<typeof Sindico>

  @hasMany( ()=> Bloco )
  public blocos: HasMany<typeof Bloco>
}
