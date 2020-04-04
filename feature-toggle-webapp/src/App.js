import React from 'react';
import Button from './Button';
import FeatureToggle from './FeatureToggle';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FeatureToggle name={'FEATURE_NEW_TEXT'}>
          <p>This is a new cool text</p>
        </FeatureToggle>

        <FeatureToggle name={'FEATURE_NEW_BUTTON'}>
          <Button> Cool Button </Button>
        </FeatureToggle>
      </header>
    </div>
  );
}

export default App;
