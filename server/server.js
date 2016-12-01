const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const posts = [{
  id: 0,
  text: 'Primer post',
  up: 0,
  down: 0
}, {
  id: 1,
  text: 'Segundo post',
  up: 0,
  down: 0
}]

app.get('/posts', function (req, res) {
  console.log(`sending ${posts.length} posts`)
  res.send([].concat(posts).reverse())
})

app.post('/posts', function (req, res) {
  if (!req.body || !req.body.text) {
    console.log('No post received')
    res.status(400).end()
    return
  }
  console.log('creating new post')
  const post = {
    id: posts.length,
    text: req.body.text,
    up: 0,
    down: 0
  }
  posts.push(post)
  res.send(post)
})

app.patch('/posts/:id', function (req, res) {
  if (!req.body || !req.body.action) {
    console.log('No post action')
    res.status(400).end()
    return
  }
  const id = req.params.id
  const post = posts[id]
  switch (req.body.action) {
    case 'up':
      console.log(`Up to post ${id}`)
      post.up += 1
      res.status(200).end()
      break
    case 'down':
      console.log(`Down to post ${id}`)
      post.down += 1
      res.status(200).end()
      break
    default:
      console.log('Invalid action')
      res.status(400).end()
  }
})

app.listen(8088, function () {
  console.log('Server started')
})
