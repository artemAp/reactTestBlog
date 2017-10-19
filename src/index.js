import React from 'react';
import ReactDOM from 'react-dom';
import './styles/foundation.css';
import './styles/main.css'

import Home from './Pages/Home';

class App extends React.Component {
  render() {
    return (
        <Home />
    )
  }
}

ReactDOM.render(<App/>, app);
module.hot.accept();