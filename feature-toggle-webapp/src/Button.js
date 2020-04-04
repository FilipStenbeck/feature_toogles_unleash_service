import React from 'react';
import './App.css';

const Button = ({ children }) => (
  <div className="button_cont" align="center">
    <a className="example_a" href="/#">
      {children}
    </a>
  </div>
);

export default Button;
