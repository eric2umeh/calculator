import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Calculator from './pages/Calculator';

class App extends React.PureComponent {
  render() {
    return <Calculator />;
  }
}

export default App;
