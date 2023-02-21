import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css';

import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <nav>
          <div className="header">
            <h1 className="title">Math Magicians</h1>

            <ul>
              <li><Link to="/" className="no-border">Home</Link></li>
              <li><Link to="/Calculator">Calculator</Link></li>
              <li><Link to="/Quote">Quote</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
