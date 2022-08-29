//ESSE CÓDIGO VAI FICAR PARA COMPARAÇÃO DEPOIS

// const http = require('http')

// http.createServer((req,res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     switch(req.url) {
//         case "/":
//             res.end("Bem vindo a minha Home");
//             break;
//         case "/contatos":
//             res.end("Bem vindos ao meu contatos");
//             break;
//         default:
//             res.end("Bem vindos ao meu server");
//     }
// })

// .listen(3000);

const express = require ('express')
const app = express()

app.get("/", (req,res) => {
    res.send("Estou na Home")
});

app.get("/contatos", (req,res) => {
    res.send("Estou nos contatos");
});

app.listen(3000, () => {
    console.log("servidor está rodando")
})