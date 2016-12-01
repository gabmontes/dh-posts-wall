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
  getPosts() {
    const self = this
    const url = `${hostname}/posts`
    return fetch(url)
      .then(response => response.json())
  }
  sendNewPost(text) {
    const self = this
    const url = `${hostname}/posts`
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const body = JSON.stringify({ text })
    return fetch(url, { method: 'POST', headers, body })
      .then(response => response.json())
  }
  votePost(id, action) {
    const self = this
    const url = `${hostname}/posts/${id}`
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const body = JSON.stringify({ action })
    fetch(url, { method: 'PATCH', headers, body })
      .then(response => response.json())
  }
  componentDidMount() {
    const self = this
    setInterval(function () {
      self.getPosts().then(function (posts) {
        self.setState({
          fetching: false,
          posts
        })
      })
    }, 1000)
  }
  onSubmit(text) {
    const self = this
    this.sendNewPost(text).then(function () {
      return self.getPosts()
    }).then(function (posts) {
      self.setState({ posts })
    })
  }
  onVote(id, action) {
    const self = this
    this.votePost(id, action).then(function () {
      return self.getPosts()
    }).then(function (posts) {
      self.setState({ posts })
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
