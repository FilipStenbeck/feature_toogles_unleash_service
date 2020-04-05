import React from 'react';
import './Button.css';

const Button = ({ children }) => (
  <div className="button_cont" align="center">
    <a className="cool_button" href="/#">
      {children}
    </a>
  </div>
);

export default Button;
