import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../components/Header/Button';

const Header = ({ title, showAdd, onAdd }) => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <h1> {title} </h1>
        {location.pathname === '/' && (
          <Button
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add Task'}
            onButton={onAdd}
          />
        )}
      </header>
    </>
  );
};

export default Header;
