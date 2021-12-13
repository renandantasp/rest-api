# Cliente API REST

## Descrição

Para essa atividade foi construída uma API REST para *Posts* utilizando [NodeJS](https://nodejs.org/en/) e a framework [Express](https://expressjs.com/). Nela foram construídas as seguintes rotas:

```
GET    : http://localhost:5000/posts
GET    : http://localhost:5000/posts/{id}
POST   : http://localhost:5000/posts/{id}
PUT    : http://localhost:5000/posts/{id}
DELETE : http://localhost:5000/posts/{id}
```

Maiores detalhes sobre a implementação estão descritos em:
* `controllers/posts.js`,
* `routes/posts.js`

---

### Execução

Para observar o client em funcionamento. Dentro da pasta `REST_API` execute o comando:
```
npm start
```

Para conseguir rodar o *client*, que estará disponível em `http://localhost:5000`