# Posts-wall

Ejercicio realizado durante las clases de React en [Digital House](https://www.digitalhouse.com/).

## Descripción

El ejercicio consiste en desarrollar el cliente, tal que muestre la lista de posts, pueda crear nuevos posts y pueda votar si gustan o no los posts existentes.

El servidor, que contiene la lista de posts, y expone una API REST

### API

#### Obtener posts
- Pedido: `GET /posts`
- Respuesta `[{ id: 0, text: ‘Primer post’, up: 0, down: 0  }, ...]`

#### Crear un nuevo post
- Pedido: `POST /posts { text: ‘Texo’ }`
- Respuesta: `{ id: 1 }`

#### Votar por un post
- Pedido: `PATCH /posts/:id { action: ‘up’|’down’ }`
- Respuesta: `{ up: 1, down: 1 }`

## Uso

Iniciar el servidor:

```bash
$ cd server
$ npm start
```

En otra consola, iniciar el cliente:

```bash
$ cd client
$ npm start
```

Finalmente, abrir el navegador en [http://localhost:9580](http://localhost:9580).
