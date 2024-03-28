const server = require('./server.js')

const port = process.env.PORT || 6868

server.listen(port, () => {
    console.log(`server start on ${port}`)
})