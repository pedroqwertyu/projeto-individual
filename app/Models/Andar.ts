import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Apartamento from './Apartamento'
import Bloco from './Bloco'

export default class Andar extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public blocoId: number

  @column()
  public manutencao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=> Apartamento )
  public apartamentos: HasMany<typeof Apartamento>

  @belongsTo( ()=> Bloco )
  public bloco: BelongsTo<typeof Bloco>
}
