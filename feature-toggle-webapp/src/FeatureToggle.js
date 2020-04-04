import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Button = ({ name, children }) => {
  const [toggle, setToggle] = useState(false);

  const isEnabled = (name, toggles) =>
    toggles.filter((item) => item?.name === name)[0]?.enabled;

  useEffect(() => {
    async function getToggles() {
      const result = await axios('http://localhost:3000/features');
      const data = result.data.toggles;

      setToggle(isEnabled(name, data));
    }
    getToggles();
  }, [name]);
  return <>{toggle ? children : ''}</>;
};

export default Button;
