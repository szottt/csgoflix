import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import LogoApp from '../LogoApp';
import './menu.css';

import Button from '../Button';

function Header() {
  const location = useLocation();

  return (
    <nav className="menu">
      <Link to="/">
        <LogoApp />
      </Link>
      {location.pathname === '/cadastro/video' ? (
        <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
          Nova categoria
        </Button>
      ) : (
        <Button as={Link} to="/cadastro/video" className="ButtonLink">
          Novo vídeo
        </Button>
      )}
    </nav>
  );
}

export default Header;
