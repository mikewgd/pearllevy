import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const root = document.getElementById('root');
const renderApp = () => <App />;

render(renderApp(), root);
