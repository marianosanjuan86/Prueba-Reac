import React from 'react';
import whatsapp from "../Images/whatsapp.png";
import instagram from "../Images/instagram.png";

export const TopBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className='navbar-brand' >
            <img src={ whatsapp } width="30" height="24" /> 11-5739-7625 / 11-4448-5829
          </span>
          <a href='#'>
            <img src={ instagram } width="30" height="24"  /> @lospelonesok
          </a>
        </div>
      </nav>

    </>

  )
};


