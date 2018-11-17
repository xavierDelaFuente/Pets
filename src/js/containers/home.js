import { connect } from 'react-redux'
import { APISuccess } from '../actions/creators/home'
import HomeLayout from '../components/home/index'

const mapStateToProps = (state, ownProps) => {
  return {
  	apiData: Object.values(state.home.apiResponse).length
  }
}

const mapDispatchToProps = dispatch => {
  return {
  	getAPIData: (pets) => {
      dispatch(APISuccess(pets))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout)
