import React, { Component } from 'react';
import '../sass/App.css';
import '../sass/App.scss';
import HomeLayout from './containers/home'

export default class App extends Component {
  render() {
    return (      
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Brastlewark</h1>
        </header>
        <HomeLayout />
        <footer className='App-footer'>
          <a className='App-footer__link' onClick={this.showInitPopUp}> Info </a>
        </footer>
      </div>      
    )
  }
}
