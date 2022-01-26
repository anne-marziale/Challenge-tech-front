import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <img
          className="logo"
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />

        <h2 className="title-header">Les Argonautes</h2>
      </div>
    </div>
  );
}

export default Header;
