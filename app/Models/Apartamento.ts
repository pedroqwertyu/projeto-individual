import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Andar from './Andar'
import Morador from './Morador'

export default class Apartamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public andarId: number

  @column()
  public tamanho: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Andar )
  public andar: BelongsTo<typeof Andar>

  @hasMany( ()=> Morador )
  public moradors: HasMany<typeof Morador>
}
