const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const http = require('http')
const server = http.createServer(app);
const compression = require('compression')
const { db } = require('./models/index')
const apiRouter = require('./api/index')
const users = require('./auth/users')
 
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(compression())
app.use('/uploads', express.static('uploads'));

app.use('/api', apiRouter)
app.use('/auth', users)

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

 
const PORT = process.env.PORT || 8080 
 
async function startServer() {
 
       await db.sync()
       server.listen(PORT, () => {
           console.log(`server listening on port ${PORT}`)
       })  
}
 
startServer()


module.exports = app