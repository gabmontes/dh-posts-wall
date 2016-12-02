import * as api from '../api'

export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_POST = 'VOTE_POST'

export function getPosts() {
  return {
    type: GET_POSTS,
    payload: api.getPosts()
  }
}

const createTemporaryPost = (function () {
  let seq = -1
  return text => ({ id: seq--, text, up: 0, down: 0 })
})()

export function sendNewPost(text) {
  return function (dispatch) {
    dispatch({
      type: CREATE_POST,
      payload: createTemporaryPost(text)
    })
    api.sendNewPost(text).then(function () {
      dispatch(getPosts())
    })
  }
}

export function votePost(id, action) {
  return function (dispatch, getState) {
    const post = getState().posts.find(post => post.id === id)
    switch (action) {
      case 'up':
        post.up += 1
        break
      case 'down':
        post.down += 1
        break
    }
    dispatch({
      type: VOTE_POST,
      payload: post
    })
    api.votePost(id, action).then(function () {
      dispatch(getPosts())
    })
  }
}
