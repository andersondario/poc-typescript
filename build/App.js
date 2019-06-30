import express, { } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './config/routes'

class App {
    

     constructor () {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

     middlewares () {
        this.express.use(express.json())
        this.express.use(cors())
    }

     database () {
        mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
    }

     routes () {
        this.express.use(routes)
    }
}

export default new App().express
