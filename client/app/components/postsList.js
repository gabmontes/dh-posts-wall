import React from 'react'
import Post from './post'

export default function PostsList({ fetching, posts, onVote }) {
  return (
    <div>
      {fetching
        ? <div>Obteniendo posts...</div>
        : posts.map(data => <Post key={data.id} {...data} onVote={onVote}/>)
      }
    </div>
  )
}
