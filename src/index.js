import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/app';
import registerServiceWorker from './registerServiceWorker';
import appStore from './js/store'
import { Provider } from 'react-redux';

const store = appStore()
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
registerServiceWorker();
