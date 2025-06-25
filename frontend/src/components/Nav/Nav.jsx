import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';




function Nav({ toggleMainVisibility }) {


  const [img, setImg] = useState('/menu.svg');
  const changeImg = () => {
    setImg((currentImg) => {
      if (currentImg === "/menu.svg") {
        setStyle(0);
        toggleMainVisibility(false); // Hide main content
        return "/cross.svg";
      } else {
        setStyle("-100%");
        toggleMainVisibility(true); // Show main content
        return "/menu.svg";
      }
    });
  };

  const [style, setStyle] = useState("-100%");
  const menuStyles = {
    right: style,
  };

  return (
    <>
      <div className='main-nav-area'>
        <div className="img-area">
          <img src="/logo.svg" alt="logo" />
          <h1>Gama Audios</h1>
        </div>
        <ul className='desktop-ul'>
          <li><Link to={"/"} style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to={"/about"} style={{ color: "white", textDecoration: "none" }}>About</Link> </li>
          <li><Link to={"/blogs"} style={{ color: "white", textDecoration: "none" }}>Blogs</Link> </li>
          <li><Link to={"/contacts"} style={{ color: "white", textDecoration: "none" }}>Contacts</Link> </li>
        </ul>
        <button className='menu-btn' onClick={changeImg}>
          <img src={img} alt="menu" />
        </button>
      </div>
      <div className="menu-area" style={menuStyles}>
        <ul className='android-ul'>
          <li><Link to={"/"} style={{ color: "black", textDecoration: "none" }}>Home</Link></li>
          <li><Link to={"/about"} style={{ color: "black", textDecoration: "none" }}>About</Link> </li>
          <li><Link to={"/blogs"} style={{ color: "black", textDecoration: "none" }}>Blogs</Link> </li>
          <li><Link to={"/contacts"} style={{ color: "black", textDecoration: "none" }}>Contacts</Link> </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;