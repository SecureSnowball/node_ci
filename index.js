require('dotenv').config()
const app = require('./src/server')
const port = parseInt(process.env.PORT, 10) || 3000

server.listen(port)