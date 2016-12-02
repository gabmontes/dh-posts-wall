const hostname = 'http://localhost:8088'

export function getPosts() {
  const url = `${hostname}/posts`
  return fetch(url)
    .then(response => response.json())
}

export function sendNewPost(text) {
  const url = `${hostname}/posts`
  const headers = new Headers({ 'Content-Type': 'application/json' })
  const body = JSON.stringify({ text })
  return fetch(url, { method: 'POST', headers, body })
    .then(response => response.json())
}

export function votePost(id, action) {
  const url = `${hostname}/posts/${id}`
  const headers = new Headers({ 'Content-Type': 'application/json' })
  const body = JSON.stringify({ action })
  return fetch(url, { method: 'PATCH', headers, body })
    .then(response => response.json())
}
