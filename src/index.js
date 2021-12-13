import express from 'express'
import bodyParser from 'body-parser'
import postsRoutes from './routes/posts.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/posts', postsRoutes);

app.get('/', (req, res) =>{
    res.send("Exercício 08: Cliente REST API.")
});

app.listen(PORT,() =>{
    console.log(`Server running on port: http://localhost:${PORT}`)
})
