import Worker from './worker'
import User from './user'
import Shop from './shop'
import Good from './good'
import { Express } from 'express'

export default function register (app: Express): void {
  Worker(app)
  User(app)
  Shop(app)
  Good(app)
}
