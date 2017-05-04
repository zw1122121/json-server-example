const jsonServer = require('json-server')
const fakerData = require('./fakerData')
const opn = require('opn')

const server = jsonServer.create()
const router = jsonServer.router(fakerData())
const middlewares = jsonServer.defaults()
const port = 3000;

server.use(middlewares)

server.use(jsonServer.rewriter({
  '/api/': '/',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
  opn('http://localhost:' + port)
})