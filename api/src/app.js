import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import config from './config'
import routesHelper from './routes-helper'
import formatRequestMiddleware from './middleware/formatRequest'

const app = express()

app.use(cors())
app.use(formatRequestMiddleware)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
routesHelper.register(app)

export default app
