import React, { Component } from 'react';
import '../../../sass/App.css';

export default class popUp extends Component {
  render() {
    const { customClass, onClose, onAccept, onCloseText, onAcceptText } = this.props
    return (
      <div className={`${customClass}`}>
        <section className={`${customClass}-container`}>
          {this.props.children}
          <div className={`${customClass}-buttons`}>
            {onCloseText && (
              <button
                className={`${customClass}-close`}
                onClick={onClose}
              >
                {onCloseText}
              </button>
            )}
            {onAcceptText && (
              <button
                className={`${customClass}-accept`}
                onClick={onAccept}
              >
                {onAcceptText}
              </button>
            )}
          </div>
        </section>
      </div>
    );
  }
}
