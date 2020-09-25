
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './redux';

const rootEl = document.getElementById('app');


render(<Provider store={store}>
<App />
</Provider>, rootEl);

if (module.hot) {
    module.hot.accept();
}