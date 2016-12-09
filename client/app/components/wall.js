import React, { Component } from 'react'
import NewPost from './newPost'
import PostsList from './postsList'

export default class Wall extends Component {
  componentDidMount() {
    const { getPosts } = this.props
    getPosts()
    setInterval(function () {
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
