import React, { Component } from 'react';
import pf from 'petfinder-client';

import city from '../../../data/map.svg'; 
import '../../../sass/App.css'; 
import PopUp from '../../containers/popup';
import InfoMenu from '../../containers/infoMenu'
import welcomePopupJson from '../../../strings/welcomePopup';

const petfinder = pf({
  key: "9ab8160696b4a7600f772a13b94e6932",
  secret: "b5efc1b6c506a95ec0131c6e9bc6b210"
})


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
  
  componentDidMount(){
    petfinder.pet.find(({output: "full", location: "Seattle, WA"})).then(data => {
      let pets
      if(data.petfinder.pets && data.petfinder.pets.pet){
        if(Array.isArray(data.petfinder.pets.pet)){
          pets = data.petfinder.pets.pet
        } else{
          pets = [pets = data.petfinder.pets.pet]
        }
      }else{
        pets = []
      }
      this.props.getAPIData(pets)
    })
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
    return (
      <div className='App-body' >
        {infoMenu}
        {backGroundImg}
        {beginPopup}
      </div>     
    )
  }
}
