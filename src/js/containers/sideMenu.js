import { connect } from 'react-redux'
import { selectCurrentCharacter } from '../actions/creators/home'
import panelInfoMenu from '../components/infoMenu/panel'

const mapStateToProps = (state, ownProps) => {
  return {
  	currentCharacter: state.home.character
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectCurrentCharacter: character => {
      dispatch(selectCurrentCharacter(character))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(panelInfoMenu)
