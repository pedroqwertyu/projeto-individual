/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.resource('/andars', 'AndarsController').apiOnly()
  Route.resource('/apartamentos', 'ApartamentosController').apiOnly()
  Route.resource('/blocos', 'BlocosController').apiOnly()
  Route.resource('/condominios', 'CondominiosController').apiOnly()
  Route.resource('/moradors', 'MoradorsController').apiOnly()
  Route.resource('/sindicos', 'SindicosController').apiOnly()
}).middleware('auth')

Route.post('/users', 'UsersController.store')
Route.post('/login', 'UsersController.login')