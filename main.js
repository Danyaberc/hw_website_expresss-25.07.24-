import express from 'express'
import mainRouter from './routes/main.js'
import helpRouter from './routes/help.js'
import profileRouter from './routes/profile.js'
import bsktRouter from './routes/bskt.js'

const server = express();

server.listen(8000)

server.set('view engine', 'ejs')
server.set('views', './views')

server.use(express.static('./public'))

server.use('/', mainRouter)
server.use('/help', helpRouter)
server.use('/profile', profileRouter)
server.use('/bskt', bsktRouter)

