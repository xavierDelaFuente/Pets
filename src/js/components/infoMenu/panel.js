import React, { Component } from 'react';
import CardInfoMenu from './card'

export default class panelInfoMenu extends Component {
  onSelectCharacter(id){
    this.props.onSelectCurrentCharacter(id)
  }

  render() {
    const { pets, onSelectCurrentCharacter, currentCharacter, closeInfoMenu } = this.props

    const SideMenu = ({pets, onSelectCurrentCharacter}) => (
      <div className='infoMenu-panel-sideMenu-elements--container'>
        <div className='infoMenu-panel-elements--container'>
            <h1 className='infoMenu-panel--title'>{`pets: `}</h1>
        </div>
        <div className='infoMenu-panel-sideMenu-elements--container is-scrollable'>
        {pets && pets.map((pet, i) => (
          <h3 className='infoMenu-panel-sideMenu-element infoMenu-panel--name' key={pet.id} onClick={this.onSelectCharacter.bind(this, pet.id)}>{pet.name}</h3>
        ))}
        </div>
      </div>
    );

    return (
      <div className='infoMenu-panel-container'>
        { pets && 
        <div className='infoMenu-panel'>
          <SideMenu pets={pets} />
          <div className='infoMenu-panel-elements--container'>
            { (currentCharacter !== -1) &&
              <CardInfoMenu pet={pets.filter(pet => pet.id === currentCharacter)} onSelectCurrentCharacter={onSelectCurrentCharacter} allPets={pets}/>
            }
          </div>
        </div>
        }
        <div className='infoMenu-buttons-container'>
          <button className='infoMenu-buttons-close' onClick={closeInfoMenu}> {`Close Menu`}</button>
        </div>
    </div>
    );
  }
}

