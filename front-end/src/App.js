import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <h2>Welcome to the homepage!</h2>
      <p>You can do this, I believe in you.</p>
      {/* <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object> */}
      <Routes />
    </div>
  );
}

export default App;
