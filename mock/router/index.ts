import { Express } from 'express'
import { readdirSync } from 'fs'
import { resolve } from 'path'

export default (app: Express) => readdirSync(resolve(__dirname), { encoding: 'utf-8' })
  .map(file => resolve(__dirname, file))
  .filter(path => !/index/.test(path))
  .forEach(path => {
    console.log('Registering module: ', path)
    import(path).then(response => {
      response.default(app)
    })
  })
