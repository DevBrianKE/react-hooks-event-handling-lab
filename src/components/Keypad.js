// components/Keypad.js
import React from 'react';

function Keypad() {
  function handleChange(event) {
    console.log('Entering password...');
  }

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Enter your password" 
      />
    </div>
  );
}

export default Keypad;
