import { connect } from 'react-redux'
import { APISuccess } from '../actions/creators/home'
import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getAPIData: (pets) => {
      dispatch(APISuccess())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
