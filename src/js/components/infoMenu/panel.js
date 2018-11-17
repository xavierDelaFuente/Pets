import React, { Component } from 'react';
import CardInfoMenu from './card'

export default class panelInfoMenu extends Component {
  onSelectCharacter(id){
    this.props.onSelectCurrentCharacter(id)
  }

  render() {
    const { characters, onSelectCurrentCharacter, currentCharacter, closeInfoMenu } = this.props

    const SideMenu = ({characters, onSelectCurrentCharacter}) => (
      <div className='infoMenu-panel-sideMenu-elements--container'>
        <div className='infoMenu-panel-elements--container'>
            <h1 className='infoMenu-panel--title'>{`Characters: `}</h1>
        </div>
        <div className='infoMenu-panel-sideMenu-elements--container is-scrollable'>
        {characters && characters.map((character, i) => (
          <h3 className='infoMenu-panel-sideMenu-element infoMenu-panel--name' key={character.id} onClick={this.onSelectCharacter.bind(this, character.id)}>{character.name}</h3>
        ))}
        </div>
      </div>
    );

    return (
      <div className='infoMenu-panel-container'>
        { characters && 
        <div className='infoMenu-panel'>
          <SideMenu characters={characters} />
          <div className='infoMenu-panel-elements--container'>
            <CardInfoMenu character={characters[currentCharacter]} onSelectCurrentCharacter={onSelectCurrentCharacter} allCharacters={characters}/>
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

