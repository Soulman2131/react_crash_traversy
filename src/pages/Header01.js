import React from 'react';
import Button from '../components/Header/Button';

const Header = ({ title, showAdd, onAdd }) => {
  return (
    <>
      <header className="header">
        <h1> {title} </h1>
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add Task'}
          onButton={onAdd}
        />
      </header>
    </>
  );
};

export default Header;
