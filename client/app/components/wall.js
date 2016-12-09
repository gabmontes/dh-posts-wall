import React, { Component } from 'react'
import NewPost from './newPost'
import PostsList from './postsList'

function startInterval(fn, interval) {
  setTimeout(fn, 0)
  return setInterval(fn, interval)
}

export default class Wall extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    startInterval(function () {
      getPosts()
    }, 5000)
  }
  render() {
    const { sendNewPost, votePost } = this.props
    const { fetching, posts } = this.props
    return (
      <div>
        <NewPost fetching={fetching} onSubmit={sendNewPost}/>
        <PostsList fetching={fetching} posts={posts} onVote={votePost}/>
      </div>
    )
  }
}
