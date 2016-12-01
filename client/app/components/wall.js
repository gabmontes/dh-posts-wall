import React, { Component } from 'react'
import NewPost from './newPost'
import PostsList from './postsList'

const hostname = 'http://localhost:8088'

export default class Wall extends Component {
  constructor() {
    super()
    this.state = {
      fetching: true,
      posts: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onVote = this.onVote.bind(this)
  }
  fetchPosts() {
    const self = this
    const url = `${hostname}/posts`
    fetch(url)
      .then(response => response.json())
      .then(function (body) {
        self.setState({
          fetching: false,
          posts: body
        })
    })
  }
  componentDidMount() {
    const self = this
    setInterval(function () {
      self.fetchPosts()
    }, 1000)
  }
  onSubmit(text) {
    const self = this
    const url = `${hostname}/posts`
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const body = JSON.stringify({ text })
    fetch(url, { method: 'POST', headers, body })
      .then(function () {
        self.fetchPosts()
      })
  }
  onVote(id, action) {
    const self = this
    const url = `${hostname}/posts/${id}`
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const body = JSON.stringify({ action })
    fetch(url, { method: 'PATCH', headers, body })
      .then(function () {
        self.fetchPosts()
      })
  }
  render() {
    const { fetching, posts } = this.state
    return (
      <div>
        <NewPost onSubmit={this.onSubmit}/>
        <PostsList fetching={fetching} posts={posts} onVote={this.onVote}/>
      </div>
    )
  }
}
