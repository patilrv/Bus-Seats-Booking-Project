const http = require('http')
const app = require('./app')

const server = http.createServer(app);

server.listen(4000, ()=>{
    console.log("server is listening on port 3000");
})