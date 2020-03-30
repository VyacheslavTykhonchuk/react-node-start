import express from 'express'
import config from '../config'

const register = handler => {
  const router = express.Router()

  router.get('/', function(req, res, next) {
    res.json({ title: 'Express' })
  })

  return router
}

export default {
  init(server, handler) {
    const routes = register(handler)
    server.use('/users', routes)
  },
}
