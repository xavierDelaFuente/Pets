import React, { Component } from 'react';
import city from '../../../data/map.svg'; 
import '../../../sass/App.css'; 
import PopUp from '../../containers/popup';
import InfoMenu from '../../containers/infoMenu'
import welcomePopupJson from '../../../strings/welcomePopup';


export default class HomeLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initPopup: true,
      showInfoMenu: false
    }
    this.onCloseInitPopUp = this.onCloseInitPopUp.bind(this)
    this.onShowInitPopUp = this.onShowInitPopUp.bind(this)
    this.onShowInfoMenu = this.onShowInfoMenu.bind(this)
    this.onHideInfoMenu = this.onHideInfoMenu.bind(this)
    this.closeInitPopUp = this.closeInitPopUp.bind(this)
  }
  
  closeInitPopUp(){
    this.onCloseInitPopUp()
  }

  onCloseInitPopUp(){
    this.setState({initPopup: false})
  }

  onShowInitPopUp(){
    this.setState({initPopup: true})
  }

  onShowInfoMenu (){
    this.setState({showInfoMenu:true})
  }

  onHideInfoMenu (){
    this.setState({showInfoMenu:false})
  }

  onGetApiData(){
    if(!this.props.apiData)
      this.props.getAPIData()
  }

  render() {
    const { apiData } = this.props
    const backGroundImg = <img src={city} className='App-background' alt='logo' onClick={this.onShowInfoMenu} alt="alternative text" title="Chech Out the foreigns of Brastlewark"/>
    let infoMenu = this.state.showInfoMenu && <InfoMenu closeInfoMenu={this.onHideInfoMenu}/>
    let beginPopup =  this.state.initPopup && (
      <PopUp customClass={`welcomePopup`} onClose={this.closeInitPopUp} onCloseText={welcomePopupJson.texts.denyButton}>
        <div className={`welcomePopup-header`}> 
          {welcomePopupJson.texts.title}
        </div>
        <div className={`welcomePopup-body`}>
          {welcomePopupJson.texts.body}
        </div>
      </PopUp> 
      )
    this.onGetApiData()
    return (
      <div className='App-body' >
        {infoMenu}
        {backGroundImg}
        {beginPopup}
      </div>     
    )
  }
}
