import React from 'react';
import logo from '../../../images/logo.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <a href='index'>
          <img className='logo-image' alt='Logo' src={logo} />
        </a>
        <p className='logo-desc'>Dev World</p>
      </div>

      <h3>Website Quiz</h3>

      <a
        target='_blank'
        href='http://dev-world.info/'
        rel='noopener noreferrer'
        className='nav-link'
      >
        MAIN SITE
      </a>
    </nav>
  );
};

export default Navbar;
