import { readFileSync } from 'fs';
let rawdata = readFileSync('post.json', 'utf8');
let posts = JSON.parse(rawdata);

/*-------------------------------------------
 GET POST - http://localhost:500/posts
 --------------------------------------------
 Retorna todos os posts presentes na database
-------------------------------------------*/
export const getPosts = (req, res) =>{
    res.send(posts);
}

/*-------------------------------------------
 GET POST - http://localhost:500/posts/{id}
 --------------------------------------------
 Retorna o post com o mesmo id que foi passado
 na url. Caso o post não exista, uma mensagem
 irá informar o usuário sobre o erro.
-------------------------------------------*/

export const getPost = (req, res) =>{
    const { id } = req.params;
    const post = posts.find( (post) => post.id == id)
    if (post){
        console.log(post);
        res.send(post);
    } else{
        res.send(`Post with ID: ${id} isn't in the database.`)
    }
}

/*-------------------------------------------
 CREATE POST - http://localhost:500/posts/{id}
 --------------------------------------------
 Cria o post que tenha os campos <id>, 
 <userId>, <title>, <body>. Caso ja exista um 
 post com o mesmo id, ele  não será inserido. 
 Se o request não tiver os quatro campos 
 necessários, nada será inserido
-------------------------------------------*/

export const createPost = (req, res) => {
    const post = req.body;
    var exist = posts.find( (p) => p.id == post.id);

    if (exist){
        res.send(`Post with id: ${post.id} is already in the database.`)
    }
    else if( post.id && post.userId && post.title && post.body){
        posts.push(post);
        res.send(`Post with userId:${post.userId}, id: ${post.id} and title: ${post.title} added to the database.`);
    }else{
        res.send("Error. Fields required: 'id', 'title', 'userId', 'body'.");
    }

}
/*-------------------------------------------
 PUT POST - http://localhost:500/posts/{id}
 --------------------------------------------
 Modifica os campos <userId>, <title>, <body>
 do post com id passado na URL. O post não
 será modificado se o ID for passado.
 Se o request não tiver os três campos 
 necessários, nada será inserido
-------------------------------------------*/

export const updatePost = (req, res) => {
    const {id, title, userId, body} = req.body;
    const {post_id} = req.params;

    var post = posts.find( (post) => post.id == post_id)

    if(id){
        res.send("Cannot update ID.");
    }
    else if (title && userId && body){
        post.title = title;
        post.userId = userId;
        post.body = body;
        res.send(`Post with ID: ${post.id} was updated in the database.`);
    }
    else{
        res.send("Error. Fields required: 'title', 'userId', 'body'.");
    }
}
/*---------------------------------------------
  DELETE POST - http://localhost:500/posts/{id}
 ----------------------------------------------
 Deleta o post com o mesmo id que foi passado
 na url. Caso o post não exista, uma mensagem
 irá informar o usuário sobre o erro.
---------------------------------------------*/

export const deletePost = (req, res) =>{
    const { id } = req.params;
    let find = posts.find( (post) => post.id == id)
    if (find){
        posts = posts.splice(posts.indexOf(find), 1);
        res.send(`Post with ID: ${id} was deleted from the database.`)
    }else{
        res.send(`There is no post with id: ${id} in the database.`)

    }
    posts = posts.filter( (post) => post.id != id)
}