import React, { Component } from 'react';
import PanelMenu from '../../containers/sideMenu'

export default class infoMenu extends Component {
  render() {
    const { pets, closeInfoMenu, onSetCurrentCharacter } = this.props

    return (
      <div className='infoMenu'>
	     <PanelMenu pets={pets}  closeInfoMenu={closeInfoMenu}/>
      </div>
    );
  }
}