import express from "express";

const app = express();
app.use(express.json());

const livros =[
    {id:1, "titulo":"Mestre dos Magos"},
    {id:2, "titulo":"O Hobbit"}
]

app.get('/', (req,res) => {
    res.status(200).send('API Node iniciada')
})

app.get('/livros',(req,res)=>{
    res.status(200).json(livros)
})

app.post('/livros',(req,res)=>{
    livros.push(req.body);
    res.status(201).send('Livro Cadastrado com sucesso')
})

export default app