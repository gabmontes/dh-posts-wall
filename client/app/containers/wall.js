import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions'
import Wall from '../components/wall'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall)
