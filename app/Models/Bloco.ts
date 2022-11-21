import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Andar from './Andar'
import Condominio from './Condominio'

export default class Bloco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public condominioId: number

  @column()
  public salao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=> Andar )
  public andars: HasMany<typeof Andar>

  @belongsTo( ()=> Condominio )
  public condominio: BelongsTo<typeof Condominio>
}
