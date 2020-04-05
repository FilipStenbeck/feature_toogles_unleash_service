import React from 'react';
import './Button.css';

const Button = ({ children }) => (
  <div align="center">
    <a className="cool_button" href="/#">
      {children}
    </a>
  </div>
);

export default Button;
