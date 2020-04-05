import React from 'react';
import Button from './components/Button';
import FeatureToggle, { ACTIVE_TOGGLES } from './utils/FeatureToggle';
import logo from './logo.svg';
import './App.css';

const { FEATURE_NEW_TEXT, FEATURE_NEW_BUTTON } = ACTIVE_TOGGLES;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <FeatureToggle name={FEATURE_NEW_TEXT}>
        <p>Testing in production, what could go wrong?</p>
      </FeatureToggle>

      <FeatureToggle name={FEATURE_NEW_BUTTON}>
        <Button>Do not press this</Button>
        <div>Proceed at your own risk.</div>
      </FeatureToggle>
    </header>
  </div>
);

export default App;
