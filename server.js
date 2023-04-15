// import http from 'http'

import app from "./src/app.js"

const port = 3000

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.end(rotas[req.url])
// })

// const rotas = {
//     '/': 'Aula de Node',
//     '/livros': 'Entrei na pagina de livro'
// }

app.listen(port, ()=>{
    console.log(`Servidor ouvindo em http://localhost:${port}`)
})
