import { GET_POSTS, CREATE_POST, VOTE_POST } from '../actions'

const initialState = {
  fetching: true,
  posts: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_POSTS}_PENDING`:
      return {
        ...state,
        fetching: !state.posts.length
      }
    case `${GET_POSTS}_FULFILLED`:
      return {
        ...state,
        fetching: false,
        posts: action.payload
      }
    case CREATE_POST:
      return {
        ...state,
        posts: [].concat(action.payload, state.posts)
      }
    case VOTE_POST:
      const newPosts = [].concat(state.posts)
      const index = state.posts.findIndex(post => post.id === action.payload.id)
      newPosts.splice(index, 1, action.payload)
      return {
        ...state,
        posts: newPosts
      }
    default:
      return state
  }
}
