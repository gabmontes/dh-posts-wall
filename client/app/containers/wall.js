import { connect } from 'react-redux'

import { getPosts, sendNewPost, votePost } from '../actions'
import Wall from '../components/wall'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: function () {
      dispatch(getPosts())
    },
    onSubmit: function (text) {
      dispatch(sendNewPost(text))
    },
    onVote: function (id, action) {
      dispatch(votePost(id, action))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall)
