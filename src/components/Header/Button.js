import React from 'react';

const Button = ({ color, text, onButton }) => {
  return (
    <>
      <button className="btn" style={{ backgroundColor: color }} onClick={onButton}>
        {text}
      </button>
    </>
  );
};

export default Button;
