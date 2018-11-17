import React, { Component } from 'react';
import PanelMenu from '../../containers/sideMenu'

export default class infoMenu extends Component {
  render() {
    const { characters, closeInfoMenu, onSetCurrentCharacter } = this.props

    return (
      <div className='infoMenu'>
	     <PanelMenu characters={characters}  closeInfoMenu={closeInfoMenu}/>
      </div>
    );
  }
}