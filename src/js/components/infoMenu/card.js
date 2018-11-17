import React, { Component } from 'react';

export default class cardInfoMenu extends Component {
  render() {
    const { pet, onSelectCurrentCharacter, allPets } = this.props
    const Professions = ({professions}) => (
        <div className='infoMenu-panel--row'>
          <div>Professions: </div>
          <div className='infoMenu-panel--professions'>
            {professions ? professions.map((profession, i) => (
              <div className='infoMenu-panel--profession'>{profession}</div>
            )) : (<div>Unknownk</div>) }
          </div>
        </div>
    );
    const Friends = ({friends, onSelectCurrentCharacter, allPets}) => (
      <div className='infoMenu-panel--row'>
        <div>Friends: </div>
        <div className='infoMenu-panel--friends'>
          {friends ? friends.map((friend, i) => (
            <div className='infoMenu-panel--friend'>{friend}</div>
          )) : (<div>Unknownk</div>)  }
        </div>
      </div>
    );

    const Description = ({pet}) => (
            <div className='infoMenu-panel--row--descriptionContainer is-scrollable'>
              <div>Description: </div>
              <div className='infoMenu-panel--cDescription'>{pet.description}</div>
            </div>
    
       ) 
    const GeneralData = ({pet}) => (
      <div className='infoMenu-panel--description-top'>
        <div className='infoMenu-panel--row'>
          <div>Animal: </div>
          <div className='infoMenu-panel--animal'>{pet.animal}</div>
        </div>
        <div className='infoMenu-panel--row'>
          <div>Mix: </div>
          <div className='infoMenu-panel--mix'>{pet.mix}</div>
        </div>
        <div className='infoMenu-panel--row'>
          <div>Age: </div>
          <div className='infoMenu-panel--age'>{pet.age}</div>
        </div>
        <div className='infoMenu-panel--row'>
          <div>Sex: </div>
          <div className='infoMenu-panel--sex'>{pet.sex}</div>
        </div>
        <div className='infoMenu-panel--row'>
          <div>Size: </div>
          <div className='infoMenu-panel--size'>{pet.size}</div>
        </div>
        <div className='infoMenu-panel--row'>
          <div>Status: </div>
          <div className='infoMenu-panel--status'>{pet.status}</div>
        </div>
      </div>
    );
        //<Description pet={pet}/>
    const CharacterCard = ({pet, onSelectCurrentCharacter}) => (
      <div className='infoMenu-panel-card'>
        <div className='infoMenu-panel-element'>
          <div className='infoMenu-panel--nametitle'>
            <h1>{pet.name}</h1>
          </div>
          <div className='infoMenu-panel--description'>
            <GeneralData pet={pet} />
            <Professions professions={pet.professions} />
            <Friends friends={pet.friends} onSelectCurrentCharacter={onSelectCurrentCharacter} allPets={allPets}/>
          </div>
        </div>
        <div className='infoMenu-panel--thumb'>
          <img src={pet.media.photos.photo[2].value} className='infoMenu-panel--thumb__img'/> 
        </div>
      </div>
    );

    return (
      <div className='infoMenu-panel-card-container'>
        { pet && 
          <CharacterCard pet={pet[0]} onSelectCurrentCharacter={onSelectCurrentCharacter}/>
        }
    </div>
    );
  }
}

