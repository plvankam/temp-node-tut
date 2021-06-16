const http = require ('http')

// request / response
const server = http.createServer((req, res) => {
  console.log(req)
  if(req.url === '/'){
    res.end('welcome to our home page')
  }
  if(req.url === '/about'){
    res.end('welcome to our about page')
  }
  res.end(`
    <h1>Oops!</h1>
    <a href="/">back home</a>
    `)
  // res.write('Welcome to our home page')
  // res.end()
}
)

server.listen(5000)
