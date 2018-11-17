import { connect } from 'react-redux'
import { recoverAPIdata } from '../actions/creators/home'
import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getAPIData: ownState => {
      dispatch(recoverAPIdata())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
